import { Money } from './index';

export class Dollar extends Money {
  public constructor(amount: number, currency: string) {
    super(amount, currency);
  }
}
