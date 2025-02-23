import { minMaxNumber } from '@/utils';

import { MIN_QUALITY, MAX_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';
import { isItemExpired } from '../utils';

export const defaultStrategy: ItemStrategy = {
  update: (item) => {
    const qualityDecrease = isItemExpired(item) ? 2 : 1;

    item.quality = minMaxNumber(
      item.quality - qualityDecrease,
      MIN_QUALITY,
      MAX_QUALITY
    );
    item.sellIn -= 1;
  },
};
