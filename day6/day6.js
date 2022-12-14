const { getData } = require('../utils/utils');
const path = require('path');

const task = (data, task) => {
  let txtData = [];
  if (!data) txtData = getData(path.resolve(__dirname, './data.txt'), /\n|-|,/);

  const indexOfFirstUniqueCharacter = getUniqueCharacterIndex(
    txtData.length ? txtData[0] : data,
    task
  );

  console.log(
    `The first unique character for task ${task} is at index ${indexOfFirstUniqueCharacter}`
  );
  return indexOfFirstUniqueCharacter;
};

const getUniqueCharacterIndex = (data, task) => {
  const uniqueRange = task === 1 ? 4 : 14;
  let previousRange = data.substring(0, uniqueRange);

  for (let i = uniqueRange; i < data.length; i++) {
    const uniquepreviousRange = [...previousRange].reduce((acc, curr) => {
      return acc.includes(curr) ? acc : acc + curr;
    }, '');
    if (uniquepreviousRange.length < uniqueRange) {
      previousRange = data.substring(i - (uniqueRange - 1), i + 1);
    } else {
      return i;
    }
  }
};

module.exports = { task };
