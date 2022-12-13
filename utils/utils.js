
const fs = require('fs');
const path = require('path');

const getData = (filePath, splitOn = '\n') => {
  return fs
    .readFileSync(path.resolve(__dirname, filePath), 'utf8')
    .toString()
    .split(splitOn);
};

module.exports = { getData };