import { minMaxNumber } from '@/utils';

import { MIN_QUALITY, MAX_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';

export const agedBrieStrategy: ItemStrategy = {
	update: (item) => {
		const qualityIncrease = item.sellIn > 0 ? 1 : 2;

		item.quality = minMaxNumber(
			item.quality + qualityIncrease,
			MIN_QUALITY,
			MAX_QUALITY
		);
		item.sellIn -= 1;
	},
};
