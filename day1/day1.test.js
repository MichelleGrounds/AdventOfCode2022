const {task1, task2} = require('./day1');

describe('day1', () => {
  const data = [
    //7
    '1',
    '2',
    '3',
    '1',
    '2',
    '3',
    '1',
    '',
    //18
    '2',
    '3',
    '4',
    '2',
    '3',
    '4',
    '',
    //39
    '1',
    '2',
    '3',
    '4',
    '5',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '1',
    '2',
    '',
    //6
    '1',
    '2',
    '3',
  ];

  const smallerData = [
    '1',
    '2',
    '',
    '2',
    '6',
    '',
    '1',
    '3',
    '',
    '4',
    '10',
    '',
    '1',
    '5',
  ];
  describe('task1', () => {
    it('returns the correct result for small data', () => {
      const result = task1(smallerData);

      expect(result).toEqual(14);
    });

    it('returns the correct result for bigger data', () => {
      const result = task1(data);

      expect(result).toEqual(39);
    });

    it('returns the correct result for txt data', () => {
      const result = task1();

      expect(result).toEqual(66306);
    });
  });
  describe('task2', () => {
    it('get top three elf sum from small data', () => {
      const result = task2(smallerData);

      expect(result).toEqual(26);
    });

    it('get top three elf sum from small data', () => {
      const result = task2(data);

      expect(result).toEqual(70);
    });

    it('get top three elf sum from txt data', () => {
      const result = task2();
      
      expect(result).toEqual(195292);
    });
  });
});
