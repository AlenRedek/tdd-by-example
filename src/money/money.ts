import { Dollar, Franc } from './index';

export class Money {
  protected amount: number;
  protected currency: string;

  protected constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public static dollar(amount: number): Money {
    return new Dollar(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Franc(amount, 'CHF');
  }

  public getCurrency(): string {
    return this.currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public equals(money: any): boolean {
    return (
      this.amount === money.amount && this.currency === money.getCurrency()
    );
  }
}
