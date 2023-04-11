import { Dollar } from './dollar';

describe('Dollar', () => {
  it('should multiply', () => {
    const five: Dollar = new Dollar(5);
    let product: Dollar = five.times(2);
    expect(product.amount).toEqual(10);
    product = five.times(3);
    expect(product.amount).toEqual(15);
  });
  });
});
