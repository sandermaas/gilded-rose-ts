import { Item } from '../Item';

export function isItemExpired(item: Item): boolean {
  return item.sellIn <= 0;
}
