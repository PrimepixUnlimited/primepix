import * as bcrypt from 'bcryptjs'
import { GraphQLResolveInfo } from 'graphql'

import { User, UserCreateInput } from '../generated/prisma'
import Config from '../config'
import { Context, generateCode } from '../lib/utils'
import { sendEmail } from '../lib/mailer'
import auth from '../lib/auth'
import { getHashedPassword, generateToken } from './common'

/*
 * QUERIES
 */

export const me = async (parent, args, ctx, info) => {
  try {
    const user = await ctx.user
    return user
  } catch (err) {
    console.warn(err)
    return err
  }
}

/*
 * MUTATIONS
 */

export const signup = async (
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
  const permissions = isArtist ? 'ARTIST' : 'USER'
  // set the user data
  const data: UserCreateInput = {
    // lowercase their email
    email: email.toLowerCase(),
    // hash their password
    password: await getHashedPassword(password),
    // set email verification token
    emailConfirmed: false,
    emailConfirmToken,
    // set permissions
    permissions: {
      set: [permissions]
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

export const verifyEmail = async (
  parent: any,
  { email, emailConfirmToken }: { email: string; emailConfirmToken: number },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  email = email.toLowerCase()
  const user = await auth.findUserByEmail(ctx.db, email)
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
    user: updatedUser
  }
}

export const signin = async (
  parent: any,
  { email, password }: { email: string; password: string },
  ctx: Context,
  info: GraphQLResolveInfo
) => {
  email = email.toLowerCase()
  const user = await auth.findUserByEmail(ctx.db, email)
  // check if the password is correct
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) {
    throw new Error(`Invalid Password!`)
  }

  return {
    token: generateToken(user, ctx),
    user
  }
}

export const signout = async (parent, args, ctx, info) => {
  ctx.response.clearCookie('token')
  return { message: 'Goodbye!' }
}
