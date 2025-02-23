import { AGED_BRIE, MAX_QUALITY } from '../constants';
import { Item } from '../Item';

import { agedBrieStrategy } from './aged-brie-strategy';

describe('agedBrieStrategy', () => {
  describe('update', () => {
    it('should decrease the sellIn by 1', () => {
      const items = [
        new Item(AGED_BRIE, 0, 5),
        new Item(AGED_BRIE, -4, 5),
        new Item(AGED_BRIE, 7, 5),
      ];
      const results = [-1, -5, 6];

      items.forEach((item, itemIndex) => {
        agedBrieStrategy.update(item);

        expect(item.sellIn).toBe(results[itemIndex]);
      });
    });

    it('should increase the quality by 1 when sellIn is higher than 0', () => {
      const items = [new Item(AGED_BRIE, 3, 12), new Item(AGED_BRIE, 25, 7)];
      const results = [13, 8];

      items.forEach((item, itemIndex) => {
        agedBrieStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });

    it('should increase the quality by 2 when sellIn is 0 or less', () => {
      const items = [new Item(AGED_BRIE, 0, 5), new Item(AGED_BRIE, -8, 6)];
      const results = [7, 8];

      items.forEach((item, itemIndex) => {
        agedBrieStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });

    it('should not increase the quality of an item over MAX_QUALITY', () => {
      const items = [new Item(AGED_BRIE, -3, 49), new Item(AGED_BRIE, 6, 50)];
      const results = [MAX_QUALITY, MAX_QUALITY];

      items.forEach((item, itemIndex) => {
        agedBrieStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });
  });
});
