import { ApolloServer } from 'apollo-server-micro'
import { typeDefs, resolvers } from '../schema.js'

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  debug: true,
  uploads: false,
  playground: false
})

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api' })
