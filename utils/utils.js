
const fs = require('fs');
const path = require('path');

const getData = (filePath) => {
  return fs
    .readFileSync(path.resolve(__dirname, filePath), 'utf8')
    .toString()
    .split('\n');
};

module.exports = { getData };