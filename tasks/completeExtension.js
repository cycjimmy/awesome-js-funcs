import path from 'path';
import {
  existsSync, lstatSync, readdirSync, readFile, writeFile,
} from 'fs';

const handleTask = ({
  dir,
  handleData = (data) => data,
}) => Promise.resolve()
  .then(() => new Promise((resolve) => {
    const targetFilesFullPathArray = [];
    const traverseDir = (handleDir) => {
      readdirSync(handleDir).forEach((file) => {
        const fullPath = path.join(handleDir, file);
        if (lstatSync(fullPath).isDirectory()) {
          traverseDir(fullPath);
        } else {
          targetFilesFullPathArray.push(fullPath);
        }
      });
    };

    traverseDir(dir);
    setTimeout(() => resolve(targetFilesFullPathArray), 500);
  }))
  .then((targetFilesFullPathArray) => targetFilesFullPathArray
    .map((fileFullPath) => Promise.resolve()
      .then(() => new Promise((resolve, reject) => {
        readFile(
          fileFullPath,
          'utf8',
          (err, fileData) => {
            if (err) {
              reject(err);
              return;
            }
            resolve(fileData);
          },
        );
      }))
      .then((fileData) => new Promise((resolve) => {
        setTimeout(() => resolve(handleData(fileData, fileFullPath)), 100);
      }))
      .then((handledFileData) => new Promise((resolve, reject) => {
        writeFile(
          fileFullPath,
          handledFileData.toString(),
          'utf8',
          (err) => {
            if (err) {
              reject(err);
              return;
            }
            resolve();
          },
        );
      }))));

Promise.resolve()
  .then(() => Promise.all([
    handleTask({
      dir: path.resolve('dist', 'cjs'),
      handleData: (data, fileFullPath) => data.replaceAll(
        /require\("(.+)"\)/g,
        ($0, $1) => {
          if ($1.search('.cjs') !== -1) {
            return $0;
          }

          if (fileFullPath.search(/index\.cjs$/g) === -1) {
            return `require("${$1}.cjs")`;
          }

          if (existsSync(path.join(fileFullPath.replace('/index.cjs', ''), `${$1}.cjs`))) {
            return `require("${$1}.cjs")`;
          }

          return `require("${$1}/index.cjs")`;
        },
      ),
    }),

    handleTask({
      dir: path.resolve('dist', 'esm'),
      handleData: (data, fileFullPath) => data.replaceAll(
        /(\w\wport)\s(.+)\sfrom\s'(.+)'/g,
        ($0, $1, $2, $3) => {
          if ($3.search('.js') !== -1) {
            return $0;
          }

          if (fileFullPath.search(/index\.js$/g) === -1) {
            return `${$1} ${$2} from '${$3}.js'`;
          }

          if (existsSync(path.join(fileFullPath.replace('/index.js', ''), `${$3}.js`))) {
            return `${$1} ${$2} from '${$3}.js'`;
          }

          return $0;
        },
      ),
    }),
  ]));
