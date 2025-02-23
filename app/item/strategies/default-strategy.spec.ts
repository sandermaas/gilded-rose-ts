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
      const results = [-1, -5, 6];

      items.forEach((item, itemIndex) => {
        defaultStrategy.update(item);

        expect(item.sellIn).toBe(results[itemIndex]);
      });
    });

    it('should decrease the quality by 1 when sellIn is higher than 0', () => {
      const items = [new Item('foo', 3, 12), new Item('foo', 16, 7)];
      const results = [11, 6];

      items.forEach((item, itemIndex) => {
        defaultStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });

    it('should decrease the quality by 2 when sellIn is 0 or less', () => {
      const items = [new Item('foo', 0, 10), new Item('foo', -8, 5)];
      const results = [8, 3];

      items.forEach((item, itemIndex) => {
        defaultStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });

    it('should not decrease the quality below MIN_QUALITY', () => {
      const items = [new Item('foo', -8, 1), new Item('foo', 8, 0)];
      const results = [MIN_QUALITY, MIN_QUALITY];

      items.forEach((item, itemIndex) => {
        defaultStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });
  });
});
