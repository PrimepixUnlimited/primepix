import { rule, shield, and, or, not } from "graphql-shield";
import { GraphQLResolveInfo } from "graphql";

import { Context } from "./utils";

// Rules
const isAuthenticated = rule()(
  async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    const user = await ctx.user;
    return user !== null;
  }
);

const isAdmin = rule()(
  async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    const { permissions } = await ctx.user;
    return permissions.indexOf("ADMIN") !== -1;
  }
);

const isArtist = rule()(
  async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    const { permissions } = await ctx.user;
    return permissions.indexOf("ARTIST") !== -1;
  }
);

const isUser = rule()(
  async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
    const { permissions } = await ctx.user;
    return permissions.indexOf("USER") !== -1;
  }
);

// Permissions
const permissions = shield({
  Query: {
    users: and(isAuthenticated, isAdmin),
    me: and(isAuthenticated),
    payment: and(isAuthenticated),
    plans: and(isAuthenticated, isArtist)
  },
  Mutation: {
    signout: and(isAuthenticated),
    createPaymentMethod: and(isAuthenticated),
    createSubscription: and(isAuthenticated),
    updateSubscription: and(isAuthenticated)
  }
});

export default permissions;
