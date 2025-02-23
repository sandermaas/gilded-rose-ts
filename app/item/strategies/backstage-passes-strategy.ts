import { minMaxNumber } from '@/utils';

import { MIN_QUALITY, MAX_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';

export const backstagePassesStrategy: ItemStrategy = {
  update: (item) => {
    let qualityIncrease = 1;

    if (item.sellIn > 5 && item.sellIn <= 10) {
      qualityIncrease = 2;
    }
    if (item.sellIn > 0 && item.sellIn <= 5) {
      qualityIncrease = 3;
    }

    item.quality =
      item.sellIn > 0
        ? minMaxNumber(item.quality + qualityIncrease, MIN_QUALITY, MAX_QUALITY)
        : 0;
    item.sellIn -= 1;
  },
};
