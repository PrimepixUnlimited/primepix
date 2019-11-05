import gql from 'graphql-tag';

export const UPDATE_SUBSCRIPTION_MUTATION = gql`
  mutation UPDATE_SUBSCRIPTION_MUTATION($planId: String!) {
    updateSubscription(planId: $planId) {
      id
    }
  }
`;
