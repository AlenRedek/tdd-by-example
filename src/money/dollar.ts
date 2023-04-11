import { Money } from './index';

export class Dollar extends Money {
  public constructor(amount: number) {
    super();

    this.amount = amount;
  }

  public times(multiplier: number): Money {
    return new Dollar(this.amount * multiplier);
  }
}
