const { getData } = require('../utils/utils');
const path = require('path');

const task1 = (data) => {
  let txtData = [];
  if (!data) txtData = getData(path.resolve(__dirname, './data.txt'), /\n|-|,/);

  const overlap = countOverlap(txtData.length ? txtData : data);
  return overlap;
};

const countOverlap = (data) => {
  let counter = 0;

  for (let i = 0; i < data.length; i += 4) {
    const elf1Room1 = Number(data[i]);
    const elf1Room2 = Number(data[i + 1]);
    const elf2Room1 = Number(data[i + 2]);
    const elf2Room2 = Number(data[i + 3]);

    if (
      (elf1Room1 <= elf2Room1 && elf1Room2 >= elf2Room2) ||
      (elf1Room1 >= elf2Room1 && elf1Room2 <= elf2Room2)
    )
      counter++;
  }

  return counter;
};

const task2 = (data) => {
  let txtData = [];
  if (!data) txtData = getData(path.resolve(__dirname, './data.txt'), /\n|-|,/);

  const overlap = countAnyOverlap(txtData.length ? txtData : data);
  return overlap;
};

const countAnyOverlap = (data) => {
  let counter = 0;
  for (let i = 0; i < data.length; i += 4) {
    const elf1Room1 = Number(data[i]);
    const elf1Room2 = Number(data[i + 1]);
    const elf2Room1 = Number(data[i + 2]);
    const elf2Room2 = Number(data[i + 3]);

    for (let j = elf1Room1; j <= elf1Room2; j++) {
      if (j >= elf2Room1 && j <= elf2Room2) {
        counter++;
        break;
      }
    }
  }

  return counter;
};

module.exports = { task1, task2 };
