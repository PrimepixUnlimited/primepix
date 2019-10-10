import { GraphQLServer } from 'graphql-yoga'

import Mutation from '../resolvers/mutation'
import Query from '../resolvers/query'
import db from './db'

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
    context: req => ({
      ...req,
      db
    })
  })

export default createServer
