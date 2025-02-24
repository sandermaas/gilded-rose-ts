import { minMaxNumber } from '@/utils';

import { MAX_QUALITY, MIN_QUALITY } from '../constants';
import { isItemExpired } from '../utils';
import { ItemStrategy } from './ItemStrategy';

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
