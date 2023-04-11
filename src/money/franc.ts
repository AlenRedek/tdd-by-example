import { Money } from './index';

export class Franc extends Money {
  public constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number): Money {
    return Money.franc(this.amount * multiplier);
  }
}
