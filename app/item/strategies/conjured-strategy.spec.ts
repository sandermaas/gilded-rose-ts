import { CONJURED_MANA_CAKE, MIN_QUALITY } from '../constants';
import { Item } from '../Item';

import { conjuredStrategy } from './conjured-strategy';

describe('conjuredStrategy', () => {
  describe('update', () => {
    it('should decrease the sellIn by 1', () => {
      const items = [
        new Item(CONJURED_MANA_CAKE, 0, 5),
        new Item(CONJURED_MANA_CAKE, -4, 5),
        new Item(CONJURED_MANA_CAKE, 7, 5),
      ];
      const results = [-1, -5, 6];

      items.forEach((item, itemIndex) => {
        conjuredStrategy.update(item);

        expect(item.sellIn).toBe(results[itemIndex]);
      });
    });

    it('should decrease the quality by 2 when sellIn is higher than 0', () => {
      const items = [
        new Item(CONJURED_MANA_CAKE, 3, 12),
        new Item(CONJURED_MANA_CAKE, 16, 7),
      ];
      const results = [10, 5];

      items.forEach((item, itemIndex) => {
        conjuredStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });

    it('should decrease the quality by 4 when sellIn is 0 or less', () => {
      const items = [
        new Item(CONJURED_MANA_CAKE, 0, 10),
        new Item(CONJURED_MANA_CAKE, -8, 5),
      ];
      const results = [6, 1];

      items.forEach((item, itemIndex) => {
        conjuredStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });

    it('should not decrease the quality below MIN_QUALITY', () => {
      const items = [
        new Item(CONJURED_MANA_CAKE, -8, 2),
        new Item(CONJURED_MANA_CAKE, 8, 1),
      ];
      const results = [MIN_QUALITY, MIN_QUALITY];

      items.forEach((item, itemIndex) => {
        conjuredStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });
  });
});
