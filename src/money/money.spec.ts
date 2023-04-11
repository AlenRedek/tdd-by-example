import { Money } from './money';

describe('Dollar', () => {
  it('should multiply', () => {
    const five: Money = Money.dollar(5);
    expect(Money.dollar(10)).toEqual(five.times(2));
    expect(Money.dollar(15)).toEqual(five.times(3));
  });

  it('should check for equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
    expect(Money.franc(5).equals(Money.dollar(5))).toBeFalsy();
  });

  it('should test currency', () => {
    expect(Money.dollar(1).getCurrency()).toEqual('USD');
    expect(Money.franc(1).getCurrency()).toEqual('CHF');
  });
});
