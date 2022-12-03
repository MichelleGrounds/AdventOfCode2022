const fs = require('fs');
const path = require('path');

const task1 = (data) => {
  let txtData = [];
  if (!data) {
    txtData = getData();
  }
  return calculateResultTask1(txtData.length ? txtData : data);
};

const getData = () => {
  return fs
  .readFileSync(path.resolve(__dirname, './data.txt'), 'utf8')
  .toString()
  .split('\n');
}

const calculateResultTask1 = (data) => {
  let currentSum = 0;
  let largestSum = 0;
  data.forEach((d) => {
    if (d !== '') {
      const num = Number(d)
      currentSum += num;
    } else {
      if (currentSum > largestSum) largestSum = currentSum;
      currentSum = 0;
    }
  });
  return largestSum;
};

const task2 = (data) => {
  let txtData = [];
  if(!data) txtData = getData();

  const summarisedData = summariseArray(txtData.length ? txtData : data);
  const topThreeElves = getTopThreeElves(summarisedData);
  return topThreeElves.reduce((a, b) => a + b, 0);
};

const summariseArray = (data) => {
  let newArray = [];
  let currentSum = 0;
  data.forEach(d => {
    if (d !== '') {
      const num = Number(d);
      currentSum += num
    } else {
      newArray.push(currentSum);
      currentSum = 0;
    }
  })
  return newArray;
}

const getTopThreeElves = (data) => {
  const sortedData = data.sort((a, b) => b - a);
  return sortedData.slice(0, 3);
}

module.exports = {task1, task2};

// task1();
