import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from '@/constants';

export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}

export class GildedRose {
	items: Array<Item>;

	constructor(items = [] as Array<Item>) {
		this.items = items;
	}

	updateQuality() {
		for (let i = 0; i < this.items.length; i++) {
			if (
				this.items[i].name != AGED_BRIE &&
				this.items[i].name != BACKSTAGE_PASSES
			) {
				if (this.items[i].quality > 0) {
					if (this.items[i].name != SULFURAS) {
						this.items[i].quality = this.items[i].quality - 1;
					}
				}
			} else {
				if (this.items[i].quality < 50) {
					this.items[i].quality = this.items[i].quality + 1;
					if (this.items[i].name == BACKSTAGE_PASSES) {
						if (this.items[i].sellIn < 11) {
							if (this.items[i].quality < 50) {
								this.items[i].quality = this.items[i].quality + 1;
							}
						}
						if (this.items[i].sellIn < 6) {
							if (this.items[i].quality < 50) {
								this.items[i].quality = this.items[i].quality + 1;
							}
						}
					}
				}
			}
			if (this.items[i].name != SULFURAS) {
				this.items[i].sellIn = this.items[i].sellIn - 1;
			}
			if (this.items[i].sellIn < 0) {
				if (this.items[i].name != AGED_BRIE) {
					if (this.items[i].name != BACKSTAGE_PASSES) {
						if (this.items[i].quality > 0) {
							if (this.items[i].name != SULFURAS) {
								this.items[i].quality = this.items[i].quality - 1;
							}
						}
					} else {
						this.items[i].quality =
							this.items[i].quality - this.items[i].quality;
					}
				} else {
					if (this.items[i].quality < 50) {
						this.items[i].quality = this.items[i].quality + 1;
					}
				}
			}
		}

		return this.items;
	}
}
