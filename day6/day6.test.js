const { task } = require('./day6.js');

describe('day6', () => {
  const data1 = {data: 'bvwbjplbgvbhsrlpgdmjqwftvncz', resultTask1: 5, resultTask2: 23};
  const data2 = {data: 'nppdvjthqldpwncqszvftbrmjlhg', resultTask1: 6, resultTask2: 23};
  const data3 = {data: 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', resultTask1: 10, resultTask2: 29};
  const data4 = {data: 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', resultTask1: 11, resultTask2: 26};
  const data5 = {data: 'mjqjpqmgbljsphdztnvjfqwrcgsmlb', resultTask1: 7, resultTask2: 19};

  describe('task1', () => {
    it(`returns ${data1.resultTask1} for data1`, () => {
      expect(task(data1.data, 1)).toEqual(data1.resultTask1);
    });
    it(`returns ${data2.resultTask1} for data2`, () => {
      expect(task(data2.data, 1)).toEqual(data2.resultTask1);
    });
    it(`returns ${data3.resultTask1} for data3`, () => {
      expect(task(data3.data, 1)).toEqual(data3.resultTask1);
    });
    it(`returns ${data4.resultTask1} for data4`, () => {
      expect(task(data4.data, 1)).toEqual(data4.resultTask1);
    });
    it(`returns ${data5.resultTask1} for data5`, () => {
      expect(task(data5.data, 1)).toEqual(data5.resultTask1);
    });
    it.only(`returns 1542 for real data`, () => {
      expect(task(null, 1)).toEqual(1542);
    });
  });

  describe('task2', () => {
    it(`returns ${data1.resultTask2} for data1`, () => {
      expect(task(data1.data, 2)).toEqual(data1.resultTask2);
    });
    it(`returns ${data2.resultTask2} for data2`, () => {
      expect(task(data2.data, 2)).toEqual(data2.resultTask2);
    });
    it(`returns ${data3.resultTask2} for data3`, () => {
      expect(task(data3.data, 2)).toEqual(data3.resultTask2);
    });
    it(`returns ${data4.resultTask2} for data4`, () => {
      expect(task(data4.data, 2)).toEqual(data4.resultTask2);
    });
    it(`returns ${data5.resultTask2} for data5`, () => {
      expect(task(data5.data, 2)).toEqual(data5.resultTask2);
    });
    it.only(`returns 3153 for real data`, () => {
      expect(task(null, 2)).toEqual(3153);
    });
  });
});
