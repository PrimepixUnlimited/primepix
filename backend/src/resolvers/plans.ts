import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'
import { User, UserCreateInput } from '../generated/prisma'
import stripe from '../lib/stripe'

// TODO: store the plans info in the DB
const BASIC_INFO = [
  '5 Products',
  'Payout once a month',
  'Basic Support',
  'All Core Features'
]
const STANDARD_INFO = [
  '20 Products',
  'Payout three times a month',
  'Basic Support',
  'All Core Features'
]
const PRO_INFO = [
  '50 Products',
  'Payout whenever you wish',
  'Full Support',
  'All Core Features'
]
const PLAN_INFO = [BASIC_INFO, STANDARD_INFO, PRO_INFO]
const ANNUAL_INFO_DISCOUNT = [5, 7.5, 10]
const ANNUAL_INFO = percentage => [`Save up to ${percentage}%`, '']

export const plans = async (
  parent: any,
  { billingCycle }: { billingCycle: string },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    const { data } = await stripe.plans.list()
    // filter the plans by their period
    const plans = data.filter((plan, idx) => plan.interval === billingCycle)
    // sort the plans by amount ASC
    const sortedPlans = plans.sort((a, b) => a.amount - b.amount)
    // shape the plans
    const shapedPlans = sortedPlans.map((plan, idx) => {
      // format the amount
      const amount = (plan.amount / 100).toFixed(2)
      // shape up the info and add the trial period info
      // TODO: change the info modelling and return trial period separately
      const info = [
        ...PLAN_INFO[idx],
        '',
        `Try for ${plan.trial_period_days} days for free now`
      ]
      // format plan title
      const nickname = plan.nickname.substring(0, plan.nickname.indexOf(' -'))
      // add discout info to annual plans
      if (billingCycle === 'year') {
        const save = ANNUAL_INFO((idx + 1) * ANNUAL_INFO_DISCOUNT[idx])
        info.unshift(...save)
      }
      // set selected plan

      return {
        ...plan,
        amount,
        info,
        nickname
      }
    })
    return shapedPlans
  } catch (e) {
    throw new TypeError(e)
  }
}
