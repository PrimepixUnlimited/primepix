import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'

export const createImage = async (
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

export const getImage = async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
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
