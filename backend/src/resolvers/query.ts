import * as moment from 'moment'

import { me } from './auth'

const users = async (parent, args, ctx, info) => {
  return ctx.db.query.users({}, info)
}

const Query = {
  me,
  users
}

export default Query
