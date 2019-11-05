import gql from 'graphql-tag'

export const VERIFY_EMAIL_MUTATION = gql`
  mutation VERIFY_EMAIL_MUTATION($email: String!, $emailConfirmToken: Float!) {
    verifyEmail(email: $email, emailConfirmToken: $emailConfirmToken) {
      token
      user {
        id
        email
      }
    }
  }
`
