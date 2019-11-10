import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'
import { User, Payment } from '../generated/prisma'
import stripe from '../lib/stripe'
import { currencySymbols } from '../config/currencies'

export const createPaymentMethod = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    const user = await ctx.user
    // update stripe's customer
    const {
      sources: { data: paymentMethods }
    } = await stripe.customers.update(user.payment.customerId, {
      source: args.tokenId
    })
    // generate a list of method ids
    const methods = paymentMethods.map(method => method.id)
    console.log(user.payment)
    // update user
    const updatedPayment: Payment = await ctx.db.mutation.updatePayment(
      {
        data: {
          methods: {
            set: methods
          }
        },
        where: {
          id: user.payment.id
        }
      },
      info
    )
    return updatedPayment
  } catch (e) {
    throw new TypeError(e)
  }
}

export const payment = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  // get currently logged in user
  const {
    payment: { customerId }
  } = await ctx.user
  const payment = await stripe.customers.retrieve(customerId)
  const formattedPayment = {
    ...payment,
    currencySymbol: currencySymbols[payment.currency.toUpperCase()],
    sources: payment.sources.data
  }
  return formattedPayment
}

export const createSubscription = async (
  parent: any,
  { planId }: { planId: string },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user
    // create subscription in stripe
    const createSubscription = await stripe.subscriptions.create({
      customer: user.payment.customerId,
      items: [
        {
          plan: planId
        }
      ]
    })
    if (!createSubscription) {
      throw new Error(`Could not set a subscription, try again later`)
    }
    // create subscription
    const subscription = {
      create: {
        subscriptionId: createSubscription.id
      }
    }
    // update user
    const updatedUser: User = await ctx.db.mutation.updateUser(
      {
        data: {
          subscription
        },
        where: {
          email: user.email
        }
      },
      '{ id, createdAt, email, permissions, updatedAt }'
    )
    return updatedUser
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const updateSubscription = async (
  parent: any,
  { planId }: { planId: string },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user
    // retrive subscription
    const subscription = await stripe.subscriptions.retrieve(
      user.subscription.subscriptionId
    )
    // update subscription in stripe
    const updateSubscription = await stripe.subscriptions.update(
      user.subscription.subscriptionId,
      {
        items: [
          {
            id: subscription.items.data[0].id,
            plan: planId
          }
        ]
      }
    )
    if (!updateSubscription) {
      throw new Error(`Could not update the subscription, try again later`)
    }
    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const cancelSubscription = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user
    // retrive subscription
    const subscription = await stripe.subscriptions.del(
      user.subscription.subscriptionId
    )
    // update db
    if (subscription) {
      await ctx.db.mutation.deleteSubScription({
        where: {
          id: user.payment.id
        }
      })
    }
    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}
