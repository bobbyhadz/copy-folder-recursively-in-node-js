// How to copy a Folder recursively in Node.js

import fs from 'fs';

// 👇️ if you use CommonJS require() syntax
// const fs = require('fs');

const sourceFolderPath = './source-folder';
const destinationFolderPath = './destination-folder';

try {
  fs.cpSync(sourceFolderPath, destinationFolderPath, {
    recursive: true,
  });
} catch (error) {
  console.log(error.message);
}
