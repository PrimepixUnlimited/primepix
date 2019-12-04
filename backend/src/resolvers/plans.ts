import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'
import { User, UserCreateInput } from '../generated/prisma'
import stripe from '../lib/stripe'
import { currencySymbols } from '../config/currencies'

// TODO: store the plans info in the DB
const BASIC_INFO: { title: string; active: boolean }[] = [
  {
    title: '5 Products',
    active: true
  },
  {
    title: 'Payout once a month',
    active: true
  },
  {
    title: 'Full Support',
    active: false
  },
  {
    title: 'All Core Features',
    active: true
  }
]
const STANDARD_INFO: { title: string; active: boolean }[] = [
  {
    title: '20 Products',
    active: true
  },
  {
    title: 'Payout three times a month',
    active: true
  },
  {
    title: 'Full Support',
    active: false
  },
  {
    title: 'All Core Features',
    active: true
  }
]
const PRO_INFO: { title: string; active: boolean }[] = [
  {
    title: '50 Products',
    active: true
  },
  {
    title: 'Payout whenever you wish!',
    active: true
  },
  {
    title: 'Full Support',
    active: true
  },
  {
    title: 'All Core Features',
    active: true
  }
]
const PLANS_INFO = [BASIC_INFO, STANDARD_INFO, PRO_INFO]
const ANNUAL_INFO_DISCOUNT: number[] = [5, 7.5, 10]

export const plans = async (
  parent: any,
  { billingCycle }: { billingCycle: string },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    const { data } = await stripe.plans.list()
    // filter the plans by their period
    const plans = data.filter((plan: { interval: string }) => plan.interval === billingCycle)
    // sort the plans by amount ASC
    const sortedPlans = plans.sort(
      (a: { amount: number }, b: { amount: number }) => a.amount - b.amount
    )
    // shape the plans
    const shapedPlans = sortedPlans.map(
      (plan: { amount: number; currency: string; nickname: string }, idx: number) => {
        // format the amount
        const amount = (plan.amount / 100).toFixed(2)
        // format plan title
        const nickname = plan.nickname.substring(0, plan.nickname.indexOf(' -'))
        // set info (features)
        const info = PLANS_INFO[idx]
        // set discount
        const discount = billingCycle === 'year' ? ANNUAL_INFO_DISCOUNT[idx] : null
        // set selected plan
        return {
          ...plan,
          amount,
          currencySymbol: currencySymbols[plan.currency.toUpperCase()],
          discount,
          info,
          nickname
        }
      }
    )
    return shapedPlans
  } catch (e) {
    throw new TypeError(e)
  }
}
