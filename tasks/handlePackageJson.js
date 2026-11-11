import path from 'node:path'
import fs from 'fs-extra'

const { readJsonSync, outputJsonSync } = fs

const jsonData = readJsonSync(
  path.resolve('package.json'),
)

if (jsonData.scripts) {
  delete jsonData.scripts
}

if (jsonData.dependencies) {
  delete jsonData.dependencies
}

if (jsonData.devDependencies) {
  delete jsonData.devDependencies
}

// `.release` only ever contains the files that have to be published, so a
// `files` allowlist would just be a second, drift-prone source of truth.
if (jsonData.files) {
  delete jsonData.files
}

// A scoped package without `publishConfig.access` is published as `restricted`.
// Keep the access level only: the registry and the tag are decided by the
// release tooling, not by the source package.json.
jsonData.publishConfig = {
  access: jsonData.publishConfig?.access ?? 'public',
}

if (jsonData.config) {
  delete jsonData.config
}

outputJsonSync(
  path.resolve('.release', 'package.json'),
  jsonData,
  {
    spaces: 2,
  },
)

console.log('handlePackageJson success!')
