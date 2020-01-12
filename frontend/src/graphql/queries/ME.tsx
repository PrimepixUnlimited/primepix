import gql from 'graphql-tag'

export const ME_QUERY = gql`
  query ME_QUERY {
    me {
      id
      email
      files {
        filename
        url
      }
      payment {
        customerId
        methods
      }
      permissions
      subscription {
        subscriptionId
      }
      updatedAt
    }
  }
`
