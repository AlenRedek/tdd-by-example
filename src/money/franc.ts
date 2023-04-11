export class Franc {
  private readonly amount: number;

  public constructor(amount: number) {
    this.amount = amount;
  }

  public times(multiplier: number): Franc {
    return new Franc(this.amount * multiplier);
  }

  public equals(dollar: Franc): boolean {
    return this.amount === dollar.amount;
  }
}
