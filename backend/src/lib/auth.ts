const jwt = require('jsonwebtoken')

export const userObj = `
{
  id,
  createdAt,
  email,
  emailConfirmed,
  emailConfirmToken,
  files {
    filename
    url
  },
  password,
  payment {
    id
    customerId,
    methods
  },
  permissions,
  subscription {
    subscriptionId
  },
  updatedAt
}`

const findUserByEmail = async (db: any, email: string) => {
  try {
    const user = await db.query.user({ where: { email } }, userObj)
    if (!user) {
      throw new Error(`No such user found for email ${email}`)
    }
    return user
  } catch (err) {
    throw new TypeError(err.message)
  }
}

const findUserById = async (db: any, id: string) => {
  try {
    const user = await db.query.user({ where: { id } }, userObj)
    if (!user) {
      throw new Error(`No such user found for id ${id}`)
    }
    return user
  } catch (err) {
    throw new TypeError(err.message)
  }
}

const getUser = async (req: any, db: any) => {
  try {
    const { authorization } = req.request.headers
    const { userId } = await jwt.verify(authorization, process.env.APP_SECRET)
    if (userId) {
      const user = await findUserById(db, userId)
      return user
    }
  } catch (err) {
    return null
  }
}

export default {
  findUserByEmail,
  findUserById,
  getUser
}
