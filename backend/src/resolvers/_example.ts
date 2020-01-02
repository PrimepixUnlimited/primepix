import { GraphQLResolveInfo } from 'graphql'

import { Context } from '../lib/utils'

export const create = async (
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

export const get = async (
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

export const update = async (
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

export const softRemove = async (
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

export const remove = async (
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
