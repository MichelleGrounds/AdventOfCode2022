const { getData } = require('../utils/utils');
const path = require('path');

const task = (task) => {
  let txtData = getData(path.resolve(__dirname, './data.txt'));

  const stacks = getStacks(txtData.length ? txtData : data);
  const moves = getMoves(txtData.length ? txtData : data);
  const finalStacks = makeMoves(stacks, moves, task);
  const topCrates = getTopCrates(finalStacks);

  console.log(`The new configuration for ${task} is ${topCrates}`);
  return topCrates;
};

const getStacks = (data) => {
  const numberOfStacks = Number(
    data
      .filter((line, i) => line.match(/\d/))[0]
      .trim()
      .slice(-1)
  );

  const stacks = Array.from(Array(numberOfStacks), () => []);

  for (let i = 0; i < data.length; i++) {
    if (data[i].match(/\d/)) break;

    const letterRow = data[i].split(' ');
    let skippedStack = 0;
    for (let j = 0; j < letterRow.length; j++) {
      if (letterRow[j].match(/[A-Z]/)) {
        stacks[j - 3 * skippedStack].push(letterRow[j][1]);
        continue;
      } else {
        j += 3;
        skippedStack++;
      }
    }
  }

  return stacks;
};

getMoves = (data) => {
  //+2 because empty line and then the next is real moves
  const firstMoveIndex = data.findIndex((line) => line.match(/\d/)) + 2;

  const moves = data
    .slice(5, data.length)
    .map((line) => line.split(/move|from|to|\n/).slice(1, line.length));
  return moves;
};

makeMoves = (stacks, moves, task) => {
  moves.forEach((move) => {
    const numberOfLettersToMove = Number(move[0]);
    const fromStack = Number(move[1]) - 1;
    const toStack = Number(move[2]) - 1;

    if (task === 1) {
      for (let i = 0; i < numberOfLettersToMove; i++) {
        stacks[toStack].unshift(stacks[fromStack].shift());
      }
    }

    if (task === 2) {
      for (let i = 0; i < numberOfLettersToMove; i++) {
        const lettersToMove = stacks[fromStack].slice(0, numberOfLettersToMove);
        i += numberOfLettersToMove;

        for (let j = 0; j < numberOfLettersToMove; j++) {
          stacks[fromStack].shift();
        }

        for (let k = lettersToMove.length - 1; k > -1; k--) {
          stacks[toStack].unshift(lettersToMove[k]);
        }
      }
    }
  });

  return stacks;
};

getTopCrates = (stacks) => {
  const topCrates = stacks.map((stack) => stack[0]);
  return topCrates.join().replaceAll(',', '');
};

module.exports = { task };
