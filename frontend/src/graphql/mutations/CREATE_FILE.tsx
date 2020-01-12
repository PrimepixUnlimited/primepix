import gql from 'graphql-tag'

export const CREATE_IMAGE_MUTATION = gql`
  mutation CREATE_IMAGE_MUTATION($fileData: String!) {
    createSubscription(fileData: $fileData) {
      filename
      user {
        files {
          filename
        }
      }
    }
  }
`
