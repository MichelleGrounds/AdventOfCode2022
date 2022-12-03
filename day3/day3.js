const { getData } = require('../utils/utils');
const path = require('path');

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

  splitStr1.forEach(str => {
    if (str2.includes(str)) commonLetter = str;
  })

  return commonLetter;
};

const calculateLetterValues = (arr) => {
  return arr.map((letter) => {
    if (letter === letter.toUpperCase()) {
      return letter.charCodeAt(0) - 38;
    } else {
      return letter.charCodeAt(0) - 96;
    }
  });
};

const sumLetterValues = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const task2 = (data) => {
  return;
};
module.exports = { task1, task2 };
