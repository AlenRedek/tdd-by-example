import { Expression, Money } from './index';

export class Bank {
  public reduce(source: Expression, to: string): Money {
    return source.reduce(to);
  }
}
