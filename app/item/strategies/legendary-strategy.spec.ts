import { LEGENDARY_QUALITY, SULFURAS } from '../constants';
import { Item } from '../Item';

import { legendaryStrategy } from './legendary-strategy';

describe('legendaryStrategy', () => {
  describe('update', () => {
    it('should not decrease the sellIn', () => {
      const items = [
        new Item(SULFURAS, 0, 5),
        new Item(SULFURAS, -4, 5),
        new Item(SULFURAS, 7, 5),
      ];
      const results = [0, -4, 7];

      items.forEach((item, itemIndex) => {
        legendaryStrategy.update(item);

        expect(item.sellIn).toBe(results[itemIndex]);
      });
    });

    it('should always have a quality of LEGENDARY_QUALITY', () => {
      const items = [
        new Item(SULFURAS, 0, 55),
        new Item(SULFURAS, -4, 80),
        new Item(SULFURAS, 7, -23),
      ];
      const results = [LEGENDARY_QUALITY, LEGENDARY_QUALITY, LEGENDARY_QUALITY];

      items.forEach((item, itemIndex) => {
        legendaryStrategy.update(item);

        expect(item.quality).toBe(results[itemIndex]);
      });
    });
  });
});
