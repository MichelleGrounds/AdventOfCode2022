const { task1 } = require('./day3');
const { task2 } = require('./day3task2');

describe('day1', () => {
  const commonLetterp = ['vJrwpWtwJgWrhcsFMMfFFhFp'];
  const commonLetterL = ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'];
  const commonLetterP = ['PmmdzqPrVvPwwTWBwg'];
  const commonLetterPL = [
    'PmmdzqPrVvPwwTWBwg',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
  ];
  
  describe('task1', () => {
    it('should return letter value for p', () => {
      expect(task1(commonLetterp)).toEqual(16);
    });
    it('should return letter value for ', () => {
      expect(task1(commonLetterL)).toEqual(38);
    });
    it('should return letter value for P', () => {
      expect(task1(commonLetterP)).toEqual(42);
    });
    it('should return letter value for P', () => {
      expect(task1(commonLetterPL)).toEqual(80);
    });
    it('should return letter value for txt', () => {
      expect(task1()).toEqual(8153);
    });
  });

  describe('task2', () => {
    const firstGroup = [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
    ];

    const secondGroup = [
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw',
    ];

    const firstAndSecondGroup = [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw',
    ];

    it('first group Priority r', () => {
      expect(task2(firstGroup)).toEqual(18);
    });

    it('second group Priority Z', () => {
      expect(task2(secondGroup)).toEqual(52);
    });

    it('first group Priority r', () => {
      expect(task2(firstAndSecondGroup)).toEqual(70);
    });

    it('first group Priority r', () => {
      expect(task2()).toEqual(2342);
    });
  });
});
