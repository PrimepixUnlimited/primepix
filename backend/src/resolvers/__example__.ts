import { GraphQLResolveInfo } from "graphql";

import { Context } from "../lib/utils";

export const example = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  try {
    // get current user
    const user = await ctx.user;

    return user;
  } catch (e) {
    throw new TypeError(e.message);
  }
};
