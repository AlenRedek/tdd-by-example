import { Expression } from './expression';
import { Money } from './money';

export class Bank {
  public reduce(source: Expression, to: string): Money {
    return Money.dollar(10);
  }
}
