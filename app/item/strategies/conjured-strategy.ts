import { minMaxNumber } from '@/utils';

import { MIN_QUALITY, MAX_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';

export const conjuredStrategy: ItemStrategy = {
	update: (item) => {
		const qualityDecrease = item.sellIn > 0 ? 2 : 4;

		item.quality = minMaxNumber(
			item.quality - qualityDecrease,
			MIN_QUALITY,
			MAX_QUALITY
		);
		item.sellIn -= 1;
	},
};
