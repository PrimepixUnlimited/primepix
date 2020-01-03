import * as AWS from 'aws-sdk'

AWS.config.update({
  region: 'eu-west-2'
})

// Creates S3 client
const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  signatureVersion: 'v4'
})

export { s3 }
