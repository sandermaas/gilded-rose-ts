import { GildedRose } from './GildedRose';

describe('GildedRose', () => {
  it('should have an empty arry of items when none are passed', () => {
    const gildedRose = new GildedRose();

    expect(gildedRose.items).toEqual([]);
  });
});
