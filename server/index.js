const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')
let { schema, resolvers, graphiql=true } = require('./_entrypoint')

const rootValue = resolvers
if (typeof schema === 'string') {
  schema = buildSchema(schema)
}

module.exports = graphqlHTTP({ schema, rootValue, graphiql })
