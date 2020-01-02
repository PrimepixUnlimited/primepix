import * as AWS from 'aws-sdk'

export default () => {
  AWS.config.getCredentials(err => {
    if (err) console.log(err)

    console.log('assets storage initialised')
  })
}
