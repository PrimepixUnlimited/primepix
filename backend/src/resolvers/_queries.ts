import { me } from './auth'
import { payment } from './payments'
import { plans } from './plans'
import { images, image } from './images'

const users = async (parent, args, ctx, info) => ctx.db.query.users({}, info)

const Query = {
  me,
  images,
  image,
  payment,
  plans,
  users
}

export default Query
