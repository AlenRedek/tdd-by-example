import { Money } from './index';

export class Franc extends Money {
  public constructor(amount: number) {
    super();

    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Franc(this.amount * multiplier);
  }
}
