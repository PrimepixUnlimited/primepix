// This file connects to the remote prisma DB and gives us the ability to query it with JS
const { Prisma } = require('./prisma.ts')

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  debug: true
})

export default db
