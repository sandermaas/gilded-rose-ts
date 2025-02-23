import { minMaxNumber } from '@/utils';

import type { ItemStrategy } from '../types';

export const defaultStrategy: ItemStrategy = {
	update: (item) => {
		const qualityDecrease = item.sellIn > 0 ? 1 : 2;

		item.quality = minMaxNumber(item.quality - qualityDecrease, 0, 50);
		item.sellIn -= 1;
	},
};
