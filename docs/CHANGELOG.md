# [5.0.0](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.11...v5.0.0) (2026-11-11)


* feat!: ship an ESM-only build and refresh the toolchain ([c3fd483](https://github.com/cycjimmy/awesome-js-funcs/commit/c3fd483ffd027fe3630f7c2712c9d5caeb7c0f0a))


### BREAKING CHANGES

* the package no longer ships a CommonJS build.
`main`/`module`/`exports` now point at `dist/`, the old `/esm/*` and
`/cjs/*` deep paths are gone, and consumers must use the new `exports`
map. `require()` keeps working on Node.js `^22.18.0` and `>=24.11.0`
through the built-in `require(esm)` support; older runtimes must switch
to `import()`.

- build: publish sources directly, drop Babel, cross-env and the .cjs
  transform plus the extension completion task
- build: add .js extensions to every relative specifier so the output
  resolves natively under Node ESM
- deps: replace eslint-config-airbnb-base with @antfu/eslint-config on
  ESLint 10 and migrate to a flat config that pins src/ to ES2017
- ci: split lint from the packaging step, add a Node 22/24 matrix, a
  dry-run release gate and a single summary check
- ci: add the issue triage, stale issue and dependabot auto-merge bots
- docs: refresh the issue/PR templates, document the v5 migration and
  the release contract in CONTRIBUTING

## [4.0.11](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.10...v4.0.11) (2026-10-19)


### Bug Fixes

* **ci:** skip npm auth verification in dry-run tests ([d2a021c](https://github.com/cycjimmy/awesome-js-funcs/commit/d2a021c8aa6f390f7215ca26eeb429c3fee319b0))

## [4.0.10](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.9...v4.0.10) (2026-10-19)


### Bug Fixes

* **ci:** 升级 GitHub Actions 工作流并改用 OIDC 发布 ([1f5ed5e](https://github.com/cycjimmy/awesome-js-funcs/commit/1f5ed5ebee5533b305d89966afe59e71cbf4ee07))

## [4.0.9](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.8...v4.0.9) (2022-11-14)


### Bug Fixes

* fix regExpression for chinesePhoneNumber ([e3fdb58](https://github.com/cycjimmy/awesome-js-funcs/commit/e3fdb585be17e80506fd169ae337eb19d32822c8))

## [4.0.8](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.7...v4.0.8) (2022-03-25)


### Bug Fixes

* fix root version after releasing ([4b3a515](https://github.com/cycjimmy/awesome-js-funcs/commit/4b3a515c990b18ed0bbc6106bc0e2e2549b3857e))

## [4.0.7](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.6...v4.0.7) (2022-03-25)


### Bug Fixes

* fix esm extension js ([949a317](https://github.com/cycjimmy/awesome-js-funcs/commit/949a317691fac432368f80f395cce868c2fc9b90))

## [4.0.6](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.5...v4.0.6) (2022-03-24)


### Bug Fixes

* remove exports ([aa1189b](https://github.com/cycjimmy/awesome-js-funcs/commit/aa1189b97fbbc92822612cd4cb745b94762309e4))

## [4.0.5](https://github.com/cycjimmy/awesome-js-funcs/compare/v4.0.4...v4.0.5) (2022-03-24)


### Bug Fixes

* refactoring build tasks ([677020f](https://github.com/cycjimmy/awesome-js-funcs/commit/677020f51bf7545954a10864d33f58b7dbb551a4))
