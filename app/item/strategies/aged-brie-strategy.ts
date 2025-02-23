import { minMaxNumber } from '@/utils';

import type { ItemStrategy } from '../types';

export const agedBrieStrategy: ItemStrategy = {
	update: (item) => {
		const qualityIncrease = item.sellIn > 0 ? 1 : 2;

		item.quality = minMaxNumber(item.quality + qualityIncrease, 0, 50);
		item.sellIn -= 1;
	},
};
