import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from '@/constants';
import { Item } from '@/item';
import { minMaxNumber } from '@/utils';

interface ItemStrategy {
	update: (item: Item) => void;
}

const AgedBrieStrategy: ItemStrategy = {
	update: (item) => {
		const qualityIncrease = item.sellIn > 0 ? 1 : 2;

		item.quality = minMaxNumber(item.quality + qualityIncrease, 0, 50);
		item.sellIn -= 1;
	},
};
const BackstagePassesStrategy: ItemStrategy = {
	update: (item) => {
		let qualityIncrease = 1;

		if (item.sellIn > 5 && item.sellIn <= 10) {
			qualityIncrease = 2;
		}
		if (item.sellIn > 0 && item.sellIn <= 5) {
			qualityIncrease = 3;
		}

		item.quality =
			item.sellIn > 0 ? minMaxNumber(item.quality + qualityIncrease, 0, 50) : 0;
		item.sellIn -= 1;
	},
};
const DefaultStrategy: ItemStrategy = {
	update: (item) => {
		const qualityDecrease = item.sellIn > 0 ? 1 : 2;

		item.quality = minMaxNumber(item.quality - qualityDecrease, 0, 50);
		item.sellIn -= 1;
	},
};
const SulfurasStrategy: ItemStrategy = {
	update: (item) => {
		item.quality = 80;
	},
};

type SpecialItemName =
	| typeof AGED_BRIE
	| typeof BACKSTAGE_PASSES
	| typeof SULFURAS;

const itemStrategies: Record<SpecialItemName, ItemStrategy> = {
	[AGED_BRIE]: AgedBrieStrategy,
	[BACKSTAGE_PASSES]: BackstagePassesStrategy,
	[SULFURAS]: SulfurasStrategy,
};

function getItemStrategy(name: string): ItemStrategy {
	const s = itemStrategies[name];

	return s ?? DefaultStrategy;
}

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
