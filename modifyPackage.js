const
  fs = require('fs')
;

fs.readFile('package.json', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  let
    json = JSON.parse(data)
    , sfinal = ''
  ;

  json.main = 'index.js';

  if (json.scripts) {
    delete json.scripts;
  }

  if (json.dependencies) {
    delete json.dependencies;
  }

  if (json.devDependencies) {
    delete json.devDependencies;
  }

  // test1.name = "li";
  sfinal = JSON.stringify(json);
  fs.writeFileSync('dist/package.json', sfinal);
});