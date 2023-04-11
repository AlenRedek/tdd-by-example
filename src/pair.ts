export class Pair {
  private readonly from: string;
  private readonly to: string;

  public constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public hashCode(): number {
    return 0;
  }
}
