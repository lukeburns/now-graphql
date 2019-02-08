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
  }
  // any other apollo-server config
}
```

where `typeDefs` is a string that decscribes your schema, then create a `now.json` file

```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "now-graphql" }
  ],
  "routes": [
    { "src": "/graphql", "dest": "index.js" }
  ]
}
```

then run `now` to deploy with [now](https://now.sh/).

Since you can use any [apollo-server](https://www.apollographql.com/docs/apollo-server/api/apollo-server.html) config, feel free to use `schema` or anything else you might do with that.

The default path is `/graphql`, but you can change that by adding `path` to your server, and updating your route in `now.json` to point to it.