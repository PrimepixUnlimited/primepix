import { me } from './auth'
import { payment } from './payments'
import { plans } from './plans'
import { getPhoto } from './photos'

const users = async (parent, args, ctx, info) => {
  return ctx.db.query.users({}, info)
}

const Query = {
  getPhoto,
  me,
  payment,
  plans,
  users
}

export default Query
