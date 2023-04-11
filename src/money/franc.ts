import { Money } from './money';

export class Franc extends Money {
  public constructor(amount: number) {
    super();

    this.amount = amount;
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }
}
