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

    const mockFile =
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHhlWElmTU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAAqgAwAEAAAAAQAAAAoAAAAACPeMwgAAAAlwSFlzAAALEwAACxMBAJqcGAAAABxJREFUGBlj/M/AAESEARNhJRAVowrxhhTRwQMAPZwCEtNsHpMAAAAASUVORK5CYII='

    const file = await s3.upload({
      Key: `${user.email}/filename.png`,
      ACL: 'public-read',
      Body: mockFile,
      Bucket: process.env.S3_BUCKET_NAME
    })
    const promise = file.promise()

    const uploadSuccess = async response => {
      // generate new image and connect it to the user
      const data: FileCreateInput = {
        filename: response.key,
        mimetype: 'image/png',
        url: response.Location,
        user: {
          connect: {
            email: user.email
          }
        }
      }
      const file = await ctx.db.mutation.createFile({ data }, info)
      return file
    }
    const uploadFailure = err => {
      throw new Error(err.message)
    }

    return promise.then(uploadSuccess, uploadFailure)
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const image = async (
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
