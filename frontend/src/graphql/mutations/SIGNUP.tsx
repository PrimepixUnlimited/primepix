import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $confirmPassword: String!
    $isArtist: Boolean!
  ) {
    signup(
      email: $email
      password: $password
      confirmPassword: $confirmPassword
      isArtist: $isArtist
    ) {
      id
      email
    }
  }
`;
