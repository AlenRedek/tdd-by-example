import { Money } from './money';

export class Dollar extends Money {
  public constructor(amount: number) {
    super();

    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }
}
