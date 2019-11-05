import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'
import { User, UserCreateInput } from '../generated/prisma'
import stripe from '../lib/stripe'

export const createPaymentMethod = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    const user = await ctx.user
    const customer = await stripe.customers.update(user.payment.customerId, {
      source: args.tokenId
    })
    return user
  } catch (e) {
    throw new TypeError(e.message)
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
  console.log(payment)
  return payment
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
      '{ id, createdAt, email, password, permissions, updatedAt }'
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
    // update subscription in stripe
    const updateSubscription = await stripe.subscriptions.update({
      customer: user.payment.customerId,
      items: [
        {
          plan: planId
        }
      ]
    })
    if (!updateSubscription) {
      throw new Error(`Could not update the subscription, try again later`)
    }
    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}