const express = require('express')
const { ApolloServer } = require('apollo-server-express')

let { typeDefs, resolvers, schemaDirectives, config } = require('./_entrypoint')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives,
  ...config
})

const app = express()
server.applyMiddleware({ app })

module.exports = app
