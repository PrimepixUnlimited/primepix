import auth, { Context } from '../lib/auth'

const me = async (parent, args, context: Context, info) => {
  const userId = auth.getUserId(context)
  return context.prisma.query.user(
    {
      where: { id: userId }
    },
    info
  )
}

const users = async (parent, args, ctx, info) => {
  // check permissions

  return ctx.db.query.users({}, info)
}

const Query = {
  me,
  users
}

export default Query
