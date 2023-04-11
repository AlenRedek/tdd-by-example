import { Bank, Expression, Money } from './index';

export class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  public constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(bank: Bank, to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;

    return new Money(amount, to);
  }
}
