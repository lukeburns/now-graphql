const express = require('express')
const { ApolloServer } = require('apollo-server-express')

let config = require('./_entrypoint')

const server = new ApolloServer(config)

const app = express()
server.applyMiddleware({ app })

module.exports = app
