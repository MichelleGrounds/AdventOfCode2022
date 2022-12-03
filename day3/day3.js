const { getData } = require('../utils/utils');
const path = require('path');
const { calculateLetterValues, sumLetterValues } = require('./utils');

const task1 = (data) => {
  let txtData = [];
  if (!data) txtData = getData(path.resolve(__dirname, './data.txt'));

  const halfStringsArray = splitStringsInHalf(txtData.length ? txtData : data);
  const commonLetters = halfStringsArray.map((arr) =>
    findCommonLetterForStringsInArray(arr)
  );
  const letterValues = calculateLetterValues(commonLetters);
  const summedLetterValues = sumLetterValues(letterValues);

  return summedLetterValues;
};

const splitStringsInHalf = (arr) => {
  return arr.map((str) => {
    const half = Math.floor(str.length / 2);
    return [str.slice(0, half), str.slice(half)];
  });
};

findCommonLetterForStringsInArray = (arr) => {
  const [str1, str2] = arr;
  let commonLetter = '';

  const splitStr1 = str1.split('');

  splitStr1.forEach((str) => {
    if (str2.includes(str)) commonLetter = str;
  });

  return commonLetter;
};

module.exports = { task1 };
