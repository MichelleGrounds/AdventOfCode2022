const { task1, task2 } = require('./day3');

describe('day1', () => {
  const commonLetterp = ['vJrwpWtwJgWrhcsFMMfFFhFp'];
  const commonLetterL = ['jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'];
  const commonLetterP = ['PmmdzqPrVvPwwTWBwg'];
  const commonLetterPL = ['PmmdzqPrVvPwwTWBwg', 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'];
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
});
