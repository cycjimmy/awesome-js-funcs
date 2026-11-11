import antfu from '@antfu/eslint-config'

export default antfu(
  {
    type: 'lib',
    // This package exports regular expressions as its public API (Chinese
    // phone numbers, ID numbers, URLs...). The regexp plugin offers no value
    // here and would demand rewriting those public patterns.
    regexp: false,
    ignores: [
      '.release/**',
      'docs/**',
    ],
  },
  {
    // src/ is published verbatim, so two properties of it are release contract
    // rather than taste.
    //
    // 1. Its ES level is a browser baseline, not a build detail. Pinning the
    //    parser to ES2017 makes a newer syntax error instead of shipping, and
    //    turns an autofix such as `Object.hasOwn` (ES2022) or a bare `catch {}`
    //    (ES2019) into a lint failure instead of a silent baseline bump.
    // 2. The JSDoc blocks annotate the return type only (e.g. `@returns
    //    {boolean}`), which is the convention these function docs follow.
    files: ['src/**/*.js'],
    languageOptions: {
      // antfu pins parserOptions.ecmaVersion to 'latest', and that value wins
      // over languageOptions.ecmaVersion, so both are set here.
      ecmaVersion: 2017,
      parserOptions: {
        ecmaVersion: 2017,
      },
    },
    rules: {
      // `prefer-object-has-own` rewrites hasOwnProperty to an ES2022 API, which
      // point 1 rejects; keep the source on the older call.
      'e18e/prefer-object-has-own': 'off',
      'jsdoc/require-returns-description': 'off',
    },
  },
  {
    // tasks/ holds the build scripts. antfu only exempts scripts/, cli/ and
    // *config* files from `no-console`, so the exemption is declared here.
    files: ['tasks/**/*.js'],
    rules: {
      'no-console': 'off',
    },
  },
)
