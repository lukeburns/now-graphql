const fs = require('fs-extra')
const path = require('path')
const FileFsRef = require('@now/build-utils/file-fs-ref')
const FileBlob = require('@now/build-utils/file-blob')
const { build, prepareCache, config } = require('@now/node')

module.exports = {
  build: async ({ files, entrypoint, workPath }) => {
    console.log(`adding graphql dependencies to package.json`)

    let pkg = { dependencies: {} }
    if (files['package.json']) {
      const stream = files['package.json'].toStream()
      const { data } = await FileBlob.fromStream({ stream })
      pkg = JSON.parse(data.toString())
    }

    const json = JSON.parse(await fs.readFile(path.join(__dirname, 'server/package.json'), 'utf8'))
    Object.keys(json.dependencies).forEach(dep => { pkg.dependencies[dep] = json.dependencies[dep] })
    files['package.json'] = new FileBlob({ data: JSON.stringify(pkg) })

    console.log(`setting graphql entrypoint`)
    files['_entrypoint.js'] = files[entrypoint]
    files[entrypoint] = new FileFsRef({ fsPath: path.join(__dirname, 'server/index.js') })

    return build({ entrypoint, files, workPath })
  },
  prepareCache,
  config
}
