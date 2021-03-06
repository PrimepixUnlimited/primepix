import gql from 'graphql-tag'

export const PLANS_QUERY = gql`
  query PLANS_QUERY($billingCycle: String!) {
    plans(billingCycle: $billingCycle) {
      id
      active
      amount
      amount_decimal
      billing_scheme
      created
      currencySymbol
      discount
      info {
        title
        active
      }
      interval
      nickname
      product
      trial_period_days
    }
  }
`
