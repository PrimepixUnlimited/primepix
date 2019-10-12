const jwt = require('jsonwebtoken')
import { Request, Response } from 'express'

import { Prisma } from '../generated/prisma'

export interface Context {
  prisma: Prisma
  request: Request
  response: Response
}

// autheticate user
const getUserId = (context: Context) => {
  const { token } = context.request.cookies

  // check if the token exists
  if (!token) throw new Error(`Not authorized`)

  const { userId } = jwt.verify(token, process.env.APP_SECRET) as {
    userId: string
  }

  // check if the user exists
  const userExists = context.prisma.exists.User({ id: userId })

  if (!userExists) throw new Error(`Not authorized`)

  return userId
}

// populate user on each request
const populateUser = async (resolve, root, args, context, info) => {
  if (!context.request.userId) return await resolve(root, args, context, info)

  const user = await context.db.query.user(
    {
      where: { id: context.request.userId }
    },
    '{ id, permissions, email }'
  )
  context.request.user = user
  await resolve(root, args, context, info)
}

export default {
  getUserId,
  populateUser
}
