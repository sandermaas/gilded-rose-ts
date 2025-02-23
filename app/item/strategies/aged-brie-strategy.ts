import { minMaxNumber } from '@/utils';

import { MAX_QUALITY, MIN_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';
import { isItemExpired } from '../utils';

export const agedBrieStrategy: ItemStrategy = {
  update: (item) => {
    const qualityIncrease = isItemExpired(item) ? 2 : 1;

    item.quality = minMaxNumber(
      item.quality + qualityIncrease,
      MIN_QUALITY,
      MAX_QUALITY
    );
    item.sellIn -= 1;
  },
};
