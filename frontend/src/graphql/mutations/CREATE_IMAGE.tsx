import gql from 'graphql-tag'

export const CREATE_IMAGE_MUTATION = gql`
  mutation CREATE_IMAGE($file: String!, $filename: String!) {
    createImage(file: $file, filename: $filename) {
      filename
      user {
        files {
          filename
        }
      }
    }
  }
`
