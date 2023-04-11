export class Pair {
  private readonly from: string;
  private readonly to: string;

  public constructor(from: string, to: string) {
    this.from = from;
    this.to = to;
  }

  public equals(pair: Pair): boolean {
    return this.from === pair.from && this.to === pair.to;
  }

  public hashCode(): number {
    return 0;
  }
}
