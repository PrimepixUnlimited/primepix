import * as AWS from 'aws-sdk'

AWS.config.update({
  region: process.env.S3_REGION
})

// Creates S3 client
const s3 = new AWS.S3({
  accessKeyId: process.env.S3_KEY,
  secretAccessKey: process.env.S3_SECRET,
  params: {
    Bucket: process.env.S3_BUCKET_NAME
  }
})

export { s3 }
