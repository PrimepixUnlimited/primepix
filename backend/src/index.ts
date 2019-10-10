const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '.env' })

import createServer from './lib/server'
import db from './lib/db'

const server = createServer()
server.express.use(cookieParser())

// decode JWT token for the future requests
server.express.use((req: any, res, next) => {
  // const { token } = req.cookies
  // if (token) {
  //   const { userId } = jwt.verify(token, process.env.APP_SECRET)
  //   req.userId = userId
  // }

  next()
})

// create a middleware that populates the user on each request
server.express.use(async (req: any, res, next) => {
  if (!req.userId) return next()

  const user = await db.query.user(
    {
      where: { id: req.userId }
    },
    '{ id, permissions, email, name }'
  )
  req.user = user
  next()
})

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => console.log(`Server is running on http://localhost:${deets.port}`)
)
