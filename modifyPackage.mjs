import {readFile, writeFileSync} from 'fs';

readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }

  const json = JSON.parse(data);

  if (json.scripts) {
    delete json.scripts;
  }

  if (json.dependencies) {
    delete json.dependencies;
  }

  if (json.devDependencies) {
    delete json.devDependencies;
  }

  if (json.publishConfig) {
    delete json.publishConfig;
  }

  if (json.config) {
    delete json.config;
  }

  const sFinal = JSON.stringify(json, null, 2);
  writeFileSync('dist/package.json', sFinal);
});
