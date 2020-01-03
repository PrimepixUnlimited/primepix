import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'
import { s3 } from '../lib/aws'

export const createImage = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user

    const mockFile =
      'data:image/png;base64,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'

    const buckets = await s3.listBuckets().promise()

    console.log('buckets: ', buckets)

    // const file = await s3
    //   .upload({
    //     Key: 'filename.png',
    //     ACL: 'public-read',
    //     Body: mockFile,
    //     Bucket: process.env.S3_BUCKET
    //   })
    //   .promise()

    // console.log(file)

    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const image = async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
  try {
    // get current user
    const user = await ctx.user

    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const updateImage = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user

    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const deleteImage = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user

    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}
