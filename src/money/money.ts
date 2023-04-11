import { Dollar, Franc } from './index';

export abstract class Money {
  protected amount: number;
  private readonly currency: string;

  protected constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  abstract times(multiplier: number): Money;

  public static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  public getCurrency(): string {
    return this.currency;
  }

  public equals(money: any): boolean {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }
}
