import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'

export const createPhoto = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user
    // create an entry in the DB with 'in progress' status

    // call S3 to upload the photo to the right directory

    // update the DB with the response 'success or failure' status

    // add the connection to User object in DB

    return user
  } catch (e) {
    throw new TypeError(e.message)
  }
}

export const getPhoto = async (
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

export const updatePhoto = async (
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

export const softRemovePhoto = async (
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

export const removePhoto = async (
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
