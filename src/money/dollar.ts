export class Dollar {
  public amount: number;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): void {
    this.amount *= multiplier;
  }
}
