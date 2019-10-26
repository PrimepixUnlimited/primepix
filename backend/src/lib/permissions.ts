import { rule, shield, and, or, not } from 'graphql-shield'
import { GraphQLResolveInfo } from 'graphql'

import { Context } from './utils'

// Rules
const isAuthenticated = rule()(
  (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    return ctx.user !== null
  }
)

const isAdmin = rule()(
  async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    const { permissions } = await ctx.user
    return permissions.indexOf('ADMIN') !== -1
  }
)

const isArtist = rule()(
  async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    const { permissions } = await ctx.user
    return permissions.indexOf('ARTIST') !== -1
  }
)

const isUser = rule()(
  async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    const { permissions } = await ctx.user
    return permissions.indexOf('USER') !== -1
  }
)

// Permissions
const permissions = shield({
  Query: {
    users: and(isAuthenticated, isAdmin),
    me: and(isAuthenticated)
  },
  Mutation: {
    signout: and(isAuthenticated)
  }
})

export default permissions
