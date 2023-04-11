import { Expression, Sum } from './index';

export class Money implements Expression {
  public readonly amount: number;
  public readonly currency: string;

  public constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  public getCurrency(): string {
    return this.currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public equals(money: Money): boolean {
    return (
      this.amount === money.amount && this.getCurrency() === money.getCurrency()
    );
  }

  public plus(addend: Money): Expression {
    return new Sum(this, addend);
  }

  public reduce(to: string): Money {
    return this;
  }
}
