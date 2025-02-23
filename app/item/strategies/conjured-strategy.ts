import { minMaxNumber } from '@/utils';

import { MAX_QUALITY, MIN_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';
import { isItemExpired } from '../utils';

export const conjuredStrategy: ItemStrategy = {
  update: (item) => {
    const qualityDecrease = isItemExpired(item) ? 4 : 2;

    item.quality = minMaxNumber(
      item.quality - qualityDecrease,
      MIN_QUALITY,
      MAX_QUALITY
    );
    item.sellIn -= 1;
  },
};
