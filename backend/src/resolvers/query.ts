const me = async (parent, args, ctx, info) => {
  // authentication check
  if (!ctx.request.userId) return null

  return ctx.db.query.user(
    {
      where: { id: ctx.request.userId }
    },
    info
  )
}

const users = async (parent, args, ctx, info) => {
  // authentication check
  // if (!ctx.request.userId) throw new Error('You must be logged in')
  // check permissions

  return ctx.db.query.users({}, info)
}

const Query = {
  me,
  users
}

export default Query
