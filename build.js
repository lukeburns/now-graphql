import glob from 'glob-promise'
import rndid from 'random-id'
import { mergeTypeDefs } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'
import { print as graphqlString } from 'graphql'
import { promises as fs } from 'fs'

async function main () {
  let out = `// Generated by npm run build on ${new Date()}\n\nimport { mergeResolvers } from '@graphql-tools/merge'\n\n`
  const ids = []
  for (const file of await glob(`${__dirname}/graphql/**/*.js`)) {
    const id = rndid(10, 'aA')
    ids.push(id)
    out += `import * as ${id} from '${file.replace(`${__dirname}/graphql/`, './graphql/')}'\n`
  }
  const typedefs = mergeTypeDefs(loadFilesSync(`${__dirname}/graphql/**/*.graphql`, { recursive: true }))
  out += `\nexport const resolvers = mergeResolvers([${ids.join(', ')}])\n\n`
  out += 'export const typeDefs = `\n' + graphqlString(typedefs) + '`\n'
  await fs.writeFile(`${__dirname}/schema.js`, out)
}
main()
