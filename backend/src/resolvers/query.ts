import auth from '../lib/auth'

const me = async (parent, args, ctx, info) => {
  const claims = await ctx.claims
  console.log(claims)
  // return ctx.db.query.user(
  //   {
  //     where: { id: ctx.request }
  //   },
  //   info
  // )
}

const users = async (parent, args, ctx, info) => {
  return ctx.db.query.users({}, info)
}

const Query = {
  me,
  users
}

export default Query
