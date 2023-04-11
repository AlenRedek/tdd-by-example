import { Money } from './index';

export interface Expression {
  reduce(to: string): Money;
}
