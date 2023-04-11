import { Expression, Money } from './index';

export class Sum implements Expression {
  public augend: Money;
  public addend: Money;

  public constructor(augend: Money, addend: Money) {
    this.augend = augend;
    this.addend = addend;
  }

  public reduce(to: string): Money {
    const amount: number = this.augend.amount + this.addend.amount;

    return new Money(amount, to);
  }
}
