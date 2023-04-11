export class Dollar {
  public amount: number;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Dollar {
    return new Dollar(this.amount * multiplier);
  }

  public equals(dollar: Dollar): boolean {
    return this.amount === dollar.amount;
  }
}
