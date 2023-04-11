import { Dollar } from './dollar';

describe('Dollar', () => {
  it('should multiply', () => {
    const five: Dollar = new Dollar(5);
    five.times(2);
    expect(five.amount).toEqual(10);
  });
});
