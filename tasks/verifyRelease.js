/* Smoke check for the published artifact: every emitted module must resolve
 * under plain Node ESM, expose the expected API, and stay loadable through
 * `require()` thanks to Node's `require(esm)` support. */
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import process from 'node:process'
import { pathToFileURL } from 'node:url'

const DIST_DIR = path.resolve('.release', 'dist')
const ENTRY = path.join(DIST_DIR, 'index.js')

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    return entry.isDirectory()
      ? walk(full)
      : [full]
  })
}

/* Read the exported names straight from the source entry, so this check keeps
 * tracking the public API instead of a hardcoded list that drifts. */
function collectExportNames() {
  const source = fs.readFileSync(path.resolve('src', 'index.js'), 'utf8')

  return [
    ...new Set(
      [
        ...source.matchAll(/export\s*\{([\s\S]*?)\}/g),
      ]
        .flatMap(match => match[1].split(','))
        .map(name => name.trim())
        .filter(Boolean)
        .map(name => name.split(/\s+as\s+/).pop().trim()),
    ),
  ].sort()
}

async function verify() {
  if (!fs.existsSync(ENTRY)) {
    throw new Error(`Missing build output: ${ENTRY}. Run "npm run package" first.`)
  }

  const modules = walk(DIST_DIR).filter(file => file.endsWith('.js'))
  for (const file of modules) {
    await import(pathToFileURL(file).href)
  }

  const expected = collectExportNames()
  const esmEntry = await import(pathToFileURL(ENTRY).href)
  const missingFromEsm = expected.filter(name => !(name in esmEntry))

  const cjsEntry = createRequire(import.meta.url)(ENTRY)
  const missingFromCjs = expected.filter(name => !(name in cjsEntry))

  if (missingFromEsm.length || missingFromCjs.length) {
    throw new Error([
      missingFromEsm.length && `Missing from the ESM entry: ${missingFromEsm.join(', ')}`,
      missingFromCjs.length && `Missing from require(): ${missingFromCjs.join(', ')}`,
    ].filter(Boolean).join('\n'))
  }

  console.log(`verifyRelease success! ${modules.length} modules, ${expected.length} exports.`)
}

verify().catch((error) => {
  console.error(error)
  process.exit(1)
})
