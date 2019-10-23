import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { GraphQLResolveInfo } from 'graphql'
import * as moment from 'moment'

import { User, UserCreateInput } from '../generated/prisma'
import Config from '../config'
import { Context, generateCode } from '../lib/utils'
import { sendEmail } from '../lib/mailer'

const TOKEN_CONFIG = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
}

const generateToken = (user: User, ctx: Context) =>
  jwt.sign({ userId: user.id }, process.env.APP_SECRET)
const getHashedPassword = (value: string) => bcrypt.hash(value, 10)
const findUserByEmail = async (ctx: Context, email) => {
  // check if the email exists
  const user = await ctx.db.query.user({ where: { email } })
  if (!user) throw new Error(`No such user found for email ${email}`)
  return user
}

const signup = async (
  parent: any,
  args: any,
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  const { email, password, confirmPassword, isArtist } = args
  // compare passwords
  if (password !== confirmPassword) {
    throw new Error(`Passwords don't match!`)
  }
  // generate verification code
  const emailConfirmToken = generateCode()
  // set the user data
  const data: UserCreateInput = {
    createdAt: moment().format(),
    updatedAt: moment().format(),
    // lowercase their email
    email: email.toLowerCase(),
    // hash their password
    password: await getHashedPassword(password),
    // set email verification token
    emailConfirmed: false,
    emailConfirmToken,
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

  return user
}

const verifyEmail = async (
  parent: any,
  { email, emailConfirmToken }: { email: string; emailConfirmToken: number },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  email = email.toLowerCase()
  const user = await findUserByEmail(ctx, email)
  // check if user has already verified their email
  if (user.emailConfirmed) {
    throw new Error(`Email already verified!`)
  }
  // validate the confirmation code
  if (
    user.emailConfirmToken !== emailConfirmToken ||
    emailConfirmToken.toString().length !== 6
  ) {
    throw new Error(`Ivalid confirmation code!`)
  }
  // update the user
  const updatedUser: User = await ctx.db.mutation.updateUser(
    {
      data: {
        emailConfirmToken: 0,
        emailConfirmed: true
      },
      where: {
        email
      }
    },
    info
  )
  delete updatedUser.emailConfirmToken
  delete updatedUser.emailConfirmed
  return {
    token: generateToken(user, ctx),
    ...updatedUser
  }
}

const signin = async (
  parent: any,
  { email, password }: { email: string; password: string },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  email = email.toLowerCase()
  const user = await findUserByEmail(ctx, email)
  // check if the password is correct
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    throw new Error(`Invalid Password!`)
  }

  return {
    token: generateToken(user, ctx),
    ...user
  }
}

const signout = async (parent, args, ctx, info) => {
  ctx.response.clearCookie('token')
  return { message: 'Goodbye!' }
}

const mutations = {
  signup,
  signin,
  signout,
  verifyEmail
}

export default mutations
