module.exports = {
  typeDefs: `
    type Query {
      hello: String
    }
  `,

  resolvers: {
    hello: () => `hello world`
  },

  introspection: true,
  playground: { settings: { 'request.credentials': 'same-origin' } }
}
