import { Money } from './index';

export class Dollar extends Money {
  public constructor(amount: number, currency: string) {
    super(amount, currency);
  }

  public times(multiplier: number): Money {
    return Money.dollar(this.amount * multiplier);
  }
}
