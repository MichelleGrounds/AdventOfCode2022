const { task1, task2 } = require('./day4');

describe('day4', () => {
  const data1 = [2, 8, 3, 5];

  const data2 = [
    4, 90, 1, 4, 80, 94, 80, 81, 1, 97, 96, 99, 20, 87, 20, 88, 84, 84, 83, 88,
    9, 75, 10, 75, 7, 25, 24, 48,
  ];

  const data3 = [7, 25, 24, 48];

  const data4 = [
    10, 99, 11, 98, 4, 98, 1, 1, 20, 42, 1, 42, 5, 31, 6, 31, 9, 14, 15, 84, 87,
    98, 22, 81, 44, 69, 45, 68, 2, 2, 2, 83, 16, 76, 69, 75, 43, 71, 43, 91, 30,
    95, 29, 29, 1, 1, 3, 87, 22, 90, 22, 80, 86, 90, 91, 98, 11, 20, 10, 20, 59,
    67, 60, 79,
  ];

  const data5 = [
    2, 2, 19, 30, 7, 8, 5, 15, 1, 2, 21, 22, 27, 47, 27, 47, 5, 7, 5, 15,
  ];

  const data6 = [
    1, 96, 1, 86, 4, 4, 3, 48, 94, 96, 5, 86, 29, 73, 29, 30, 21, 22, 22, 80,
    97, 98, 29, 98, 42, 75, 76, 84, 86, 92, 85, 93, 14, 70, 13, 69,
  ];

  const data7 = [76, 78, 40, 77];

  const data8 = [2, 2, 2, 4];

  describe('task1', () => {
    it('return count 1 for the overlap', () => {
      expect(task1(data1)).toEqual(1);
    });
    it('return count 4 for more data', () => {
      expect(task1(data2)).toEqual(4);
    });
    it('return count 0 for no overlap', () => {
      expect(task1(data3)).toEqual(0);
    });
    it('return count 9 for data4', () => {
      expect(task1(data4)).toEqual(9);
    });
    it('return count 3 for data5', () => {
      expect(task1(data5)).toEqual(3);
    });
    it('return count 5 for data6', () => {
      expect(task1(data6)).toEqual(5);
    });
    it('return count 0 for data7', () => {
      expect(task1(data7)).toEqual(0);
    });
    it('return count 1 for data8', () => {
      expect(task1(data8)).toEqual(1);
    });
    it('return count for real data', () => {
      expect(task1()).toEqual(534);
    });
  });
  
  describe('task2', () => {
    const data9 = [2, 4, 6, 8, 2, 3, 4, 5];
    const data10 = [5, 7, 7, 9, 2, 8, 3, 7, 6, 6, 4, 6, 2, 6, 4, 8];
    it('returns 0 overlap for data9', () => {
      expect(task2(data9)).toEqual(0);
    });
    it('returns 4 overlap for data10', () => {
      expect(task2(data10)).toEqual(4);
    });
    it('returns 841 overlap for real data', () => {
      expect(task2()).toEqual(841);
    });
  });
});
