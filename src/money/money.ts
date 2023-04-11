export class Money {
  protected amount: number;

  public equals(money: any): boolean {
    return (
      this.amount === money.amount &&
      this.constructor.name === money.constructor.name
    );
  }
}
