export class Money {
  private readonly amount: number;
  private readonly currency: string;

  protected constructor(amount: number, currency: string) {
    this.amount = amount;
    this.currency = currency;
  }

  public static dollar(amount: number): Money {
    return new Money(amount, 'USD');
  }

  public static franc(amount: number): Money {
    return new Money(amount, 'CHF');
  }

  public getCurrency(): string {
    return this.currency;
  }

  public times(multiplier: number): Money {
    return new Money(this.amount * multiplier, this.currency);
  }

  public equals(money: Money): boolean {
    return (
      this.amount === money.amount && this.getCurrency() === money.getCurrency()
    );
  }
}
