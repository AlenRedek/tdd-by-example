import { Bank, Expression, Money, Sum } from './index';

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

  it('should test for addition', () => {
    const five: Money = Money.dollar(5);
    const sum: Expression = five.plus(five);
    const bank: Bank = new Bank();
    const reduced: Money = bank.reduce(sum, 'USD');
    expect(Money.dollar(10)).toEqual(reduced);
  });

  it('should test whether plus returns sum', () => {
    const five: Money = Money.dollar(5);
    const result: Expression = five.plus(five);
    expect(five).toEqual((result as Sum).augend);
    expect(five).toEqual((result as Sum).addend);
  });

  it('should reduce the sum', () => {
    const sum: Expression = new Sum(Money.dollar(3), Money.dollar(4));
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(sum, 'USD');
    expect(Money.dollar(7)).toEqual(result);
  });

  it('should reduce the money', () => {
    const bank: Bank = new Bank();
    const result: Money = bank.reduce(Money.dollar(1), 'USD');
    expect(Money.dollar(1)).toEqual(result);
  });
});
