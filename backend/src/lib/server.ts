import { GraphQLServer } from 'graphql-yoga'

import Mutation from '../resolvers/_mutations'
import Query from '../resolvers/_queries'
import db from './db'
import auth from './auth'
import permissions from './permissions'
import mailer from './mailer'

const createServer = () =>
  new GraphQLServer({
    typeDefs: 'src/resolvers/schema.graphql',
    resolvers: {
      Mutation,
      Query
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false
    },
    middlewares: [permissions],
    context: req => ({
      ...req,
      db,
      user: auth.getUser(req, db),
      mailer
    })
  })

export default createServer
