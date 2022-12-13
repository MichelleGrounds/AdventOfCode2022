const { task } = require('./day5.js');

describe('day5', () => {
  describe('task1', () => {
    it('returns NTWZZWHFV for real data', () => {
      expect(task(1)).toEqual('NTWZZWHFV');
    });
  });

  describe('task2', () => {
    it('returns BRZGFVBTJ for real data', () => {
      expect(task(2)).toEqual('BRZGFVBTJ');
    });
  });
});
