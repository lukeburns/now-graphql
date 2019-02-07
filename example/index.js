module.exports = {
  typeDefs: `
    type Query {
      hello: String
    }
  `,

  resolvers: {
    Query: {
      hello: () => `hello world`
    }
  },

  introspection: true,
  playground: true,
  path: '/'
}
