import { Dollar, Franc } from './index';

export abstract class Money {
  protected amount: number;

  public static dollar(amount: number): Money {
    return new Dollar(amount);
  }

  public static franc(amount: number): Money {
    return new Franc(amount);
  }

  abstract times(multiplier: number): Money;

  public equals(money: any): boolean {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }
}
