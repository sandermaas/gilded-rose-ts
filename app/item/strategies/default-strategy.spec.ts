import { MIN_QUALITY } from '../constants';
import { Item } from '../Item';

import { defaultStrategy } from './default-strategy';

describe('defaultStrategy', () => {
  describe('update', () => {
    it('should decrease the sellIn by 1', () => {
      const items = [
        new Item('foo', 0, 5),
        new Item('foo', -4, 5),
        new Item('foo', 7, 5),
      ];

      items.forEach((item) => {
        defaultStrategy.update(item);
      });

      expect(items[0].sellIn).toBe(-1);
      expect(items[1].sellIn).toBe(-5);
      expect(items[2].sellIn).toBe(6);
    });

    it('should decrease the quality by 1 when sellIn is higher than 0', () => {
      const items = [new Item('foo', 3, 12), new Item('foo', 16, 7)];

      items.forEach((item) => {
        defaultStrategy.update(item);
      });

      expect(items[0].quality).toBe(11);
      expect(items[1].quality).toBe(6);
    });

    it('should decrease the quality by 2 when sellIn is 0 or less', () => {
      const items = [new Item('foo', 0, 10), new Item('foo', -8, 5)];

      items.forEach((item) => {
        defaultStrategy.update(item);
      });

      expect(items[0].quality).toBe(8);
      expect(items[1].quality).toBe(3);
    });

    it('should not decrease the quality below MIN_QUALITY', () => {
      const items = [new Item('foo', -8, 1), new Item('foo', 8, 0)];

      items.forEach((item) => {
        defaultStrategy.update(item);
      });

      expect(items[0].quality).toBe(MIN_QUALITY);
      expect(items[1].quality).toBe(MIN_QUALITY);
    });
  });
});
