import gql from 'graphql-tag'

export const CREATE_IMAGE_MUTATION = gql`
  mutation CREATE_IMAGE($file: Upload!) {
    createImage(file: $file) {
      filename
      user {
        files {
          filename
        }
      }
    }
  }
`
