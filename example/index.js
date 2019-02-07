module.exports = {
  typeDefs: `
    type Query {
      hello: String
    }
  `,

  resolvers: {
    hello: () => `hello world`
  },

  config: {
    introspection: true,
    playground: { settings: { 'request.credentials': 'same-origin' } }
  }
}
