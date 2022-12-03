const { getData } = require('../utils/utils');
const path = require('path');
const { calculateLetterValues, sumLetterValues } = require('./utils');

const task2 = (data) => {
  let txtData = [];
  if (!data) txtData = getData(path.resolve(__dirname, './data.txt'));

  const groupsOfThree = groupInGroupsOfThree(txtData.length ? txtData : data);
  const commonLetters = groupsOfThree.map((group) => findCommonLetter(group));
  const letterValues = calculateLetterValues(commonLetters);
  const summedLetterValues = sumLetterValues(letterValues);

  return summedLetterValues;
};

const groupInGroupsOfThree = (arr) => {
  const groupsOfThree = [];
  for (let i = 0; i < arr.length; i += 3) {
    groupsOfThree.push(arr.slice(i, i + 3));
  }
  return groupsOfThree;
};

const findCommonLetter = (arr) => {
  const [str1, str2, str3] = arr;
  const splitStr1 = str1.split('');
  let commonLetter = '';

  splitStr1.forEach((str) => {
    if (str2.includes(str) && str3.includes(str)) commonLetter = str;
  });

  return commonLetter;
};

module.exports = { task2 };
