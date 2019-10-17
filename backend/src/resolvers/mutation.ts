import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { GraphQLResolveInfo } from 'graphql'
import { v4 as uuid } from 'uuid'
import * as moment from 'moment'

import Config from '../config'
import { Context } from '../lib/utils'
import { User, UserCreateInput } from '../generated/prisma'

const TOKEN_CONFIG = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
}

const generateToken = (user: User, ctx: Context) => jwt.sign({ userId: user.id }, process.env.APP_SECRET)
const getHashedPassword = (value: string) => bcrypt.hash(value, 10)

const sendEmail = async (mailer, options: any) => {
  if (mailer) {
    try {
      await mailer.send(options);
    } catch (err) {
      throw new Error(err)
    }
  }
}

const signup = async (parent: any, args: any, ctx: Context, info: GraphQLResolveInfo) => {
  const { email, password, confirmPassword, isArtist } = args
  // compare passwords
  if (password !== confirmPassword) {
    throw new Error(`Passwords don't match!`)
  }

  const data: UserCreateInput = {
    createdAt: moment().format(),
    updatedAt: moment().format(),
    // lowercase their email
    email: email.toLowerCase(),
    // hash their password
    password: await getHashedPassword(password),
    // set email verification token
    emailConfirmed: false,
    emailConfirmToken: uuid(),
    // set permissions
    permissions: {
      set: [isArtist ? 'ARTIST' : 'USER']
    }
  }
  // create the user in the database
  const user: User = await ctx.db.mutation.createUser({ data }, info)

  // submit the verification code
  sendEmail(ctx.mailer, {
    template: 'signUpUser',
    message: {
      to: data.email
    },
    locals: {
      mailAppUrl: Config.APP.url,
      emailConfirmToken: data.emailConfirmToken,
      email: data.email
    }
  })

  // remove the verification token before returning the user
  delete user.emailConfirmToken

  return {
    token: generateToken(user, ctx),
    ...user
  }
}

// const verifyEmail = async (parent: any, )

const signin = async (parent, { email, password }, ctx, info) => {
  email = email.toLowerCase()
  // check if the email exists
  const user = await ctx.db.query.user({ where: { email } })
  if (!user) throw new Error(`No such user found for email ${email}`)
  // check if the password is correct
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error(`Invalid Password!`)

  return {
    token: generateToken(user, ctx),
    user
  }
}

const signout = async (parent, args, ctx, info) => {
  ctx.response.clearCookie('token')
  return { message: 'Goodbye!' }
}

const mutations = {
  signup,
  signin,
  signout
}

export default mutations
