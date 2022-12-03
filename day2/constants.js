const scoreForShape = {
  a: 1,
  b: 2,
  c: 3,
};

const scoreForOutcome = {
  win: 6,
  draw: 3,
  loss: 0,
};

const transformOutcome = {
  x: 'loss',
  y: 'draw',
  z: 'win',
};

const lossMap = {
  a: 'c',
  b: 'a',
  c: 'b',
}

const winMap = {
  a: 'b',
  b: 'c',
  c: 'a',
}

module.exports = { scoreForShape, scoreForOutcome, transformOutcome, lossMap, winMap };
