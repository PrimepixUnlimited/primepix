import { GraphQLServer } from 'graphql-yoga'

import Mutation from '../resolvers/mutation'
import Query from '../resolvers/query'
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
      claims: auth.getClaims(req),
      mailer
    })
  })

export default createServer
