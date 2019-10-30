const makeConfig = require('@cycjimmy/config-lib/semanticRelease/15.x/makeConfig');

module.exports = makeConfig({
  exec: true,
  execOptions: {
    publishCmd: 'npm run package'
  },
  npmOptions: {
    pkgRoot: 'dist'
  },
});
