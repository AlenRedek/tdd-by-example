import { Bank, Money } from './index';

export interface Expression {
  reduce(bank: Bank, to: string): Money;
}
