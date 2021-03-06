// This file connects to the remote prisma DB and gives us the ability to query it with JS
const { Prisma } = require('../generated/prisma')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: false
})

export default db
