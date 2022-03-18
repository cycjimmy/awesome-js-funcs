import path from 'path';
import {
  lstatSync, readdirSync, readFile, writeFile,
} from 'fs';

Promise.resolve()
  .then(() => new Promise((resolve) => {
    const targetFilesFullPathArray = [];
    const traverseDir = (dir) => {
      readdirSync(dir).forEach((file) => {
        const fullPath = path.join(dir, file);
        if (lstatSync(fullPath).isDirectory()) {
          traverseDir(fullPath);
        } else {
          targetFilesFullPathArray.push(fullPath);
        }
      });
    };

    traverseDir(path.resolve('dist', 'cjs'));
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
        const handledFileData = fileData.replaceAll(
          /require\("(.+)"\)/g,
          ($0, $1) => ($1.search('.cjs') === -1
            ? `require("${$1}.cjs")`
            : $0),
        );
        setTimeout(() => resolve(handledFileData), 100);
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
