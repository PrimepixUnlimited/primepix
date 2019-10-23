import { rule, shield, and, or, not } from 'graphql-shield'

// Rules
const isAuthenticated = rule()(async (parent, args, ctx, info) => {
  return ctx.claims !== null
})

const isAdmin = rule()(async (parent, args, ctx, info) => {
  return ctx.claims === 'ADMIN'
})

const isArtist = rule()(async (parent, args, ctx, info) => {
  return ctx.claims === 'ARTIST'
})

const isUser = rule()(async (parent, args, ctx, info) => {
  return ctx.claims === 'USER'
})

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
