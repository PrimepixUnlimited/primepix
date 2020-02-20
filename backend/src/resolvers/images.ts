import { GraphQLResolveInfo } from 'graphql'

import { FileCreateInput } from '../generated/prisma'
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
    const file = await args.file
    const { createReadStream, filename, mimetype, encoding } = file
    const fileStream = createReadStream()

    const uploadParams = {
      Key: `${user.email}/${filename}`,
      ACL: 'public-read',
      Body: fileStream,
      Bucket: process.env.S3_BUCKET_NAME,
      ContentEncoding: encoding,
      ContentType: mimetype
    }
    const result = await s3.upload(uploadParams)
    const promise = result.promise()

    const uploadSuccess = async response => {
      // generate new image and connect it to the user
      const data: FileCreateInput = {
        filename,
        mimetype,
        url: response.Location,
        user: {
          connect: {
            email: user.email
          }
        }
      }
      const dbFile = await ctx.db.mutation.createFile({ data }, info)
      return dbFile
    }
    const uploadFailure = err => {
      throw new Error(err.message)
    }

    return promise.then(uploadSuccess, uploadFailure)
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const images = async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
  try {
    // get current user
    const user = await ctx.user

    return user.files
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
