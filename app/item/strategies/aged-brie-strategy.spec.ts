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

      items.forEach((item) => {
        agedBrieStrategy.update(item);
      });

      expect(items[0].sellIn).toBe(-1);
      expect(items[1].sellIn).toBe(-5);
      expect(items[2].sellIn).toBe(6);
    });

    it('should increase the quality by 1 when sellIn is higher than 0', () => {
      const items = [new Item(AGED_BRIE, 3, 12), new Item(AGED_BRIE, 25, 7)];

      items.forEach((item) => {
        agedBrieStrategy.update(item);
      });

      expect(items[0].quality).toBe(13);
      expect(items[1].quality).toBe(8);
    });

    it('should increase the quality by 2 when sellIn is 0 or less', () => {
      const items = [new Item(AGED_BRIE, 0, 5), new Item(AGED_BRIE, -8, 6)];

      items.forEach((item) => {
        agedBrieStrategy.update(item);
      });

      expect(items[0].quality).toBe(7);
      expect(items[1].quality).toBe(8);
    });

    it('should not increase the quality of an item over MAX_QUALITY', () => {
      const items = [new Item(AGED_BRIE, -3, 49), new Item(AGED_BRIE, 6, 50)];

      items.forEach((item) => {
        agedBrieStrategy.update(item);
      });

      expect(items[0].quality).toBe(MAX_QUALITY);
      expect(items[1].quality).toBe(MAX_QUALITY);
    });
  });
});
