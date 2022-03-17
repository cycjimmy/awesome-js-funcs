/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const makeConfig = require('@cycjimmy/config-lib/cjs/semanticRelease/15.x/makeConfig.cjs').default;

module.exports = makeConfig({
  exec: true,
  execOptions: {
    prepareCmd: 'npm run package',
  },
  npmOptions: {
    pkgRoot: 'dist',
  },
});
