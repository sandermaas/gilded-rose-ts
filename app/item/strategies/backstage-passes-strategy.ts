import { minMaxNumber } from '@/utils';

import { MAX_QUALITY, MIN_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';
import { isItemExpired } from '../utils';

export const backstagePassesStrategy: ItemStrategy = {
  update: (item) => {
    let qualityIncrease = 1;

    if (item.sellIn > 5 && item.sellIn <= 10) {
      qualityIncrease = 2;
    }
    if (item.sellIn > 0 && item.sellIn <= 5) {
      qualityIncrease = 3;
    }

    item.quality = isItemExpired(item)
      ? 0
      : minMaxNumber(item.quality + qualityIncrease, MIN_QUALITY, MAX_QUALITY);
    item.sellIn -= 1;
  },
};
