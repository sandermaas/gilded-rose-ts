import { minMaxNumber } from '@/utils';

import { MAX_QUALITY, MIN_QUALITY } from '../constants';
import { isItemExpired } from '../utils';
import { ItemStrategy } from './ItemStrategy';

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
