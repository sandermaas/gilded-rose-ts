import { BACKSTAGE_PASSES, MAX_QUALITY, MIN_QUALITY } from '../constants';
import { Item } from '../Item';

import { backstagePassesStrategy } from './backstage-passes-strategy';

describe('backstagePassesStrategy', () => {
  describe('update', () => {
    it('should decrease the sellIn by 1', () => {
      const items = [
        new Item(BACKSTAGE_PASSES, 0, 5),
        new Item(BACKSTAGE_PASSES, -4, 5),
        new Item(BACKSTAGE_PASSES, 7, 5),
      ];

      items.forEach((item) => {
        backstagePassesStrategy.update(item);
      });

      expect(items[0].sellIn).toBe(-1);
      expect(items[1].sellIn).toBe(-5);
      expect(items[2].sellIn).toBe(6);
    });

    it('should increase the quality by 1 when sellIn is higher than 10', () => {
      const items = [
        new Item(BACKSTAGE_PASSES, 11, 2),
        new Item(BACKSTAGE_PASSES, 20, 4),
      ];

      items.forEach((item) => {
        backstagePassesStrategy.update(item);
      });

      expect(items[0].quality).toBe(3);
      expect(items[1].quality).toBe(5);
    });

    it('should increase the quality by 2 when sellIn is between 6 and 10', () => {
      const items = [
        new Item(BACKSTAGE_PASSES, 6, 3),
        new Item(BACKSTAGE_PASSES, 10, 5),
      ];

      items.forEach((item) => {
        backstagePassesStrategy.update(item);
      });

      expect(items[0].quality).toBe(5);
      expect(items[1].quality).toBe(7);
    });

    it('should increase the quality by 3 when sellIn is between 1 and 5', () => {
      const items = [
        new Item(BACKSTAGE_PASSES, 1, 4),
        new Item(BACKSTAGE_PASSES, 5, 6),
      ];

      items.forEach((item) => {
        backstagePassesStrategy.update(item);
      });

      expect(items[0].quality).toBe(7);
      expect(items[1].quality).toBe(9);
    });

    it('should set quality to MIN_QUALITY when sellIn is 0 or less', () => {
      const items = [
        new Item(BACKSTAGE_PASSES, 0, 8),
        new Item(BACKSTAGE_PASSES, -1, 10),
      ];

      items.forEach((item) => {
        backstagePassesStrategy.update(item);
      });

      expect(items[0].quality).toBe(MIN_QUALITY);
      expect(items[1].quality).toBe(MIN_QUALITY);
    });

    it('should not increase the quality of an item over MAX_QUALITY', () => {
      const items = [
        new Item(BACKSTAGE_PASSES, 2, 48),
        new Item(BACKSTAGE_PASSES, 8, 49),
        new Item(BACKSTAGE_PASSES, 12, 50),
      ];

      items.forEach((item) => {
        backstagePassesStrategy.update(item);
      });

      expect(items[0].quality).toBe(MAX_QUALITY);
      expect(items[1].quality).toBe(MAX_QUALITY);
      expect(items[2].quality).toBe(MAX_QUALITY);
    });
  });
});
