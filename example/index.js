module.exports = {
  schema: `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    hello: () => `hello world`
  }
}
