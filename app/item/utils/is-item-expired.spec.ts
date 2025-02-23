import { Item } from '../Item';

import { isItemExpired } from './is-item-expired';

describe('isItemExpired', () => {
  it('should return true when sellIn is 0 or lower', () => {
    const items = [new Item('foo', 0, 10), new Item('foo', -4, 4)];

    items.forEach((item) => {
      expect(isItemExpired(item)).toBe(true);
    });
  });

  it('should return false when sellIn is higher than 0', () => {
    const items = [new Item('foo', 1, 10), new Item('foo', 20, 4)];

    items.forEach((item) => {
      expect(isItemExpired(item)).toBe(false);
    });
  });
});
