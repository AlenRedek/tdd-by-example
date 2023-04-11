export class Money {
  protected amount: number;

  public equals(money: Money): boolean {
    return this.amount === money.amount;
  }
}
