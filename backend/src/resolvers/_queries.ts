import { me } from './auth'
import { payment } from './payments'
import { plans } from './plans'
import { image } from './images'

const users = async (parent, args, ctx, info) => {
  return ctx.db.query.users({}, info)
}

const Query = {
  me,
  image,
  payment,
  plans,
  users
}

export default Query
