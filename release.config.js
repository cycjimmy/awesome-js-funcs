const makeConfig = require('@cycjimmy/config-lib/semanticRelease/15.x/makeConfig');

module.exports = makeConfig({
  exec: true,
  execOptions: {
    prepareCmd: 'npm run package'
  },
  npmOptions: {
    pkgRoot: 'dist'
  },
  git: true,
  gitAssets: [
    "package.json",
    "package-lock.json"
  ]
});
