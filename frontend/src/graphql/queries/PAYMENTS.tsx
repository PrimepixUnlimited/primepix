import gql from 'graphql-tag'

export const PAYMENT_QUERY = gql`
  query PAYMENT {
    payment {
      balance
      currency
      currencySymbol
      sources {
        brand
        name
        exp_month
        exp_year
        id
        funding
        object
      }
    }
  }
`
