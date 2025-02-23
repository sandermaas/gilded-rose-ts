import { Item, getItemStrategy } from '@/item';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      getItemStrategy(item.name).update(item);
    });

    return this.items;
  }
}
