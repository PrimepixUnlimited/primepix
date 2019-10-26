import * as jwt from 'jsonwebtoken'
import * as bcrypt from 'bcryptjs'

import { Context } from '../lib/utils'
import { User } from '../generated/prisma'

export const TOKEN_CONFIG = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
}

export const generateToken = (user: User, ctx: Context) =>
  jwt.sign({ userId: user.id }, process.env.APP_SECRET)

export const getHashedPassword = (value: string) => bcrypt.hash(value, 10)
