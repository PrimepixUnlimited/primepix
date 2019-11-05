import gql from 'graphql-tag';

export const CREATE_PAYMENT_METHOD_MUTATION = gql`
  mutation CREATE_PAYMENT_METHOD_MUTATION($tokenId: String!) {
    createPaymentMethod(tokenId: $tokenId) {
      id
    }
  }
`;
