import * as moment from 'moment'

import { me } from './auth'
import { payment } from './payments'
import { plans } from './plans'

const users = async (parent, args, ctx, info) => {
  return ctx.db.query.users({}, info)
}

const Query = {
  me,
  payment,
  plans,
  users
}

export default Query
