const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: '.env' })

import createServer from './lib/server'

const server = createServer()

server.express.use(cookieParser())

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => console.log(`Server is running on http://localhost:${deets.port}`)
)
