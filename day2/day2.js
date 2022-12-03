const {
  scoreForShape,
  scoreForOutcome,
  transformOutcome,
  lossMap,
  winMap,
} = require('./constants');
const { getData } = require('../utils/utils');
const path = require('path');

const task1 = (data) => {
  let txtData = [];
  if (!data) txtData = getData(path.resolve(__dirname, './data.txt'));

  const eachScore = getEachScore(txtData.length ? txtData : data, 'task1');
  const totalScore = getTotalScore(eachScore);
  return totalScore;
};

const getWinner = (p1, p2) => {
  p2Transform = {
    x: 'a',
    y: 'b',
    z: 'c',
  };

  transformedP2 = p2Transform[p2];
  const totalScore = scoreForShape[transformedP2];

  const returnWin = () => totalScore + scoreForOutcome.win;
  const returnLoss = () => totalScore + scoreForOutcome.loss;
  const returnDraw = () => totalScore + scoreForOutcome.draw;

  if (p1 === transformedP2) return returnDraw();

  if (p1 === 'a' && transformedP2 === 'c') return returnLoss();
  if (p1 === 'b' && transformedP2 === 'a') return returnLoss();
  if (p1 === 'c' && transformedP2 === 'b') return returnLoss();

  if (p1 === 'c' && transformedP2 === 'a') return returnWin();
  if (p1 === 'b' && transformedP2 === 'c') return returnWin();
  if (p1 === 'a' && transformedP2 === 'b') return returnWin();
};

const getEachScore = (data, task) => {
  return data.map((d) => {
    const [p1, p2] = d.split(' ');
    p1LowerCase = p1.toLowerCase();
    p2LowerCase = p2.toLowerCase();

    if (task === 'task1') return getWinner(p1LowerCase, p2LowerCase);
    if (task === 'task2') return getOutcome(p1LowerCase, p2LowerCase);
  });
};

const getTotalScore = (data) => {
  return data.reduce((a, b) => a + b, 0);
};

const task2 = (data) => {
  let txtData = [];
  if (!data) txtData = getData(path.resolve(__dirname, './data.txt'));
  
  const eachScore = getEachScore(txtData.length ? txtData : data, 'task2');
  return (totalScore = getTotalScore(eachScore));
};

const getOutcome = (p1, outcome) => {
  const transformedOutcome = transformOutcome[outcome];

  outcomeScore = scoreForOutcome[transformedOutcome];

  if (transformedOutcome === 'draw') return outcomeScore + scoreForShape[p1];

  if (transformedOutcome === 'win')
    return outcomeScore + scoreForShape[winMap[p1]];

  if (transformedOutcome === 'loss')
    return outcomeScore + scoreForShape[lossMap[p1]];
};
module.exports = { task1, task2 };
