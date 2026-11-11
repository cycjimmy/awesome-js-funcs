# Contributing

The repository is released under the MIT license and follows the standard
GitHub development process: issues are tracked in the issue tracker and pull
requests are merged into `main`.

## Branching

Create a branch off `main` and open the pull request against `main`. The release
branches (`next`, `next-major`, `alpha`, `beta`) are managed by
semantic-release and are not merged into by hand.

## Commands

```bash
npm ci          # install the exact dependency tree
npm run lint    # ESLint (flat config, @antfu/eslint-config)
npm run package # build .release/ from src/
npm run verify  # load the built artifact and assert the public exports
```

`npm run package` copies `src/` into `.release/dist` verbatim, so the `.js`
extension in every relative specifier matters: nothing rewrites the imports
after the copy. The same goes for the language level: `eslint.config.js` pins
`src/` to ES2017, the level the previous Babel build emitted, so newer syntax
fails `npm run lint` instead of silently raising the runtime baseline.

## Commits

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/),
and every commit, pull request title and review comment is written in English.

semantic-release runs with its default `angular` preset, which only treats the
`BREAKING CHANGE:` footer as a major version signal: a lone `!` in the header
(`feat!: ...`) is ignored by that preset. Mark a breaking change with the
footer, not just the bang:

```text
feat: switch to an ESM-only build

BREAKING CHANGE: the CommonJS build is gone; use `import` instead.
```

## Pull requests

Fill in the pull request template, run the commands above before pushing, and
keep one logical change per pull request.
