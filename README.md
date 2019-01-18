# now-graphql

a [now builder](https://zeit.co/docs/v2/deployments/builders/overview/) for graphql services

## usage

create an `index.js` file

```js
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
```

where `schema` is a string or a GraphQLSchema object, then create a `now.json` file

```json
{
  "version": 2,
  "builds": [
    { "src": "index.js", "use": "now-graphql" }
  ]
}
```

then run `now` to deploy with [now](https://now.sh/).
