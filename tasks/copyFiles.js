import path from 'node:path'
import fs from 'fs-extra'

const { copySync } = fs

// The package ships its sources as-is: they are plain ESM with explicit .js
// specifiers, so no transpilation step is needed before publishing.
copySync(
  path.resolve('src'),
  path.resolve('.release', 'dist'),
)
copySync(
  path.resolve('README.md'),
  path.resolve('.release', 'README.md'),
)
copySync(
  path.resolve('LICENSE'),
  path.resolve('.release', 'LICENSE'),
)

console.log('copyFiles success!')
