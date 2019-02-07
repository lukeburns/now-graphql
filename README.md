# now-graphql

a [now builder](https://zeit.co/docs/v2/deployments/builders/overview/) for graphql services

## usage

create an `index.js` file

```js
module.exports = {
  typeDefs: `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    hello: () => `hello world`
  },
  // any other apollo-server config
}
```

where `typeDefs` is a string that decscribes your schema, then create a `now.json` file

```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "now-graphql" }
  ]
}
```

then run `now` to deploy with [now](https://now.sh/).

Since you can use any [apollo-server](https://github.com/apollographql/apollo-server) config, feel free to use `schema` or anything else you might do with that.