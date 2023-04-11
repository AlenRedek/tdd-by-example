import { Expression, Money, Pair } from './index';

export class Bank {
  private rates = new Map();

  public reduce(source: Expression, to: string): Money {
    return source.reduce(this, to);
  }

  public rate(from: string, to: string): number {
    if (from === to) {
      return 1;
    }

    const rate: number = this.rates.get(new Pair(from, to).hashCode());

    return rate;
  }

  public addRate(from: string, to: string, rate: number): void {
    this.rates.set(new Pair(from, to).hashCode(), rate);
  }
}
