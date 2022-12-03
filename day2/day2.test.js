const { task1, task2 } = require('./day2');

describe('day1', () => {
  const firstData = ['A Y'];
  const secondData = ['B X'];
  const thirdData = ['C Z'];
  
  describe('task1', () => {
    it('first test rock paper', () => {
      const result = task1(firstData);

      expect(result).toBe(8);
    });
    it('second test paper rock', () => {
      const result = task1(secondData);

      expect(result).toBe(1);
    });
    it('third test scissors scissors', () => {
      const result = task1(thirdData);

      expect(result).toBe(6);
    });
    it('txt test', () => {
      const result = task1();

      expect(result).toBe(12535);
    });
  });

  describe('task2', () => {
    it('first test draw', () => {
      const result = task2(firstData);

      expect(result).toBe(4);
    });
    it('second test loss', () => {
      const result = task2(secondData);

      expect(result).toBe(1);
    });
    it('third test win', () => {
      const result = task2(thirdData);

      expect(result).toBe(7);
    });
    it('txt test', () => {
      const result = task2();

      expect(result).toBe(15457);
    });
  });
});
