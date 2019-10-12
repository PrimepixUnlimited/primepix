const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const TOKEN_CONFIG = {
  httpOnly: true,
  maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year cookie
}

const signup = async (parent, args, ctx, info) => {
  const { email, password, confirmPassword, isArtist } = args
  // compare passwords
  if (password !== confirmPassword) throw new Error(`Passwords don't match!`)
  // lowercase their email
  const formattedEmail = email.toLowerCase()
  // hash their password
  const securePassword: string = await bcrypt.hash(password, 10)
  // set permissions
  const permission = isArtist ? 'ARTIST' : 'USER'
  const permissions = {
    set: [permission]
  }
  // create the user in the database
  const user = await ctx.db.mutation.createUser(
    {
      data: {
        email: formattedEmail,
        password: securePassword,
        permissions
      }
    },
    info
  )
  // create the JWT token for the new user
  const token: string = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
  // we set the hwt as a cookie on the response
  ctx.response.cookie('token', token, TOKEN_CONFIG)

  return user
}

const signin = async (parent, { email, password }, ctx, info) => {
  email = email.toLowerCase()
  // check if the email exists
  const user = await ctx.db.query.user({ where: { email } })
  if (!user) throw new Error(`No such user found for email ${email}`)
  // check if the password is correct
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error(`Invalid Password!`)
  // generate JWT token
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
  // set the cookie with the token
  ctx.response.cookie('token', token, TOKEN_CONFIG)

  return user
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
