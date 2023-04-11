import { Money } from './index';

export class Franc extends Money {
  public constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
