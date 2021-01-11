# now-graphql

This used to be a [vercel builder](https://zeit.co/docs/v2/deployments/builders/overview/) for graphql services. There have been some changes to how that works, so I moved to another format for my own projects, so this serves as a simple demo-project. 

You can see it deployed [here](https://now-graphql.dkonsumer.vercel.app).

## usage

Put your files in `graphql/` to include your resolvers (.js) and typedefs (.graphql). They can go in sub-directories or however you want to organize them.

* `npm i` - Install deopendencies and tools for local development
* `npm start` - Run a local dev-server
* `npm run deploy` - Deploy the app to vercel
