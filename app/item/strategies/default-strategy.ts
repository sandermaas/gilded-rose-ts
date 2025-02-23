import { minMaxNumber } from '@/utils';

import { MIN_QUALITY, MAX_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';

export const defaultStrategy: ItemStrategy = {
	update: (item) => {
		const qualityDecrease = item.sellIn > 0 ? 1 : 2;

		item.quality = minMaxNumber(
			item.quality - qualityDecrease,
			MIN_QUALITY,
			MAX_QUALITY
		);
		item.sellIn -= 1;
	},
};
