import { Bank, Money } from './index';

export interface Expression {
  plus(addend: Expression): Expression;

  reduce(bank: Bank, to: string): Money;

  times(multiplier: number): Expression;
}
