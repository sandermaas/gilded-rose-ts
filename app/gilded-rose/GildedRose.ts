import { Item, ItemStrategy } from '@/item';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      ItemStrategy.getStrategy(item.name).update(item);
    });

    return this.items;
  }
}
