import gql from 'graphql-tag';

export const CREATE_SUBSCRIPTION_MUTATION = gql`
  mutation CREATE_SUBSCRIPTION_MUTATION($planId: String!) {
    createSubscription(planId: $planId) {
      id
    }
  }
`;
