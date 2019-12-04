import { Options } from 'graphql-yoga'
import { formatError } from 'apollo-errors'

require('dotenv').config({ path: '.env' })

import createServer from './lib/server'

const server = createServer()

const options: Options = {
  cors: {
    credentials: true,
    origin: process.env.FRONTEND_URL
  },
  formatError
}

server.start(options, deets => console.log(`Server is running on http://localhost:${deets.port}`))
