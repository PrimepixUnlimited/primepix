import gql from 'graphql-tag';

export const VERIFY_EMAIL = gql`
  mutation VERIFY_EMAIL($email: String!, $emailConfirmToken: Float!) {
    verifyEmail(email: $email, emailConfirmToken: $emailConfirmToken) {
      token
      user {
        id
        email
      }
    }
  }
`;
