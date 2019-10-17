import auth from '../lib/auth'

const me = async (parent, args, ctx, info) => {
  // console.log(ctx.claims)
  // return ctx.prisma.query.user(
  //   {
  //     where: { id: userId }
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
