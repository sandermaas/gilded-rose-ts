import { LEGENDARY_QUALITY } from '../constants';
import type { ItemStrategy } from '../types';

export const legendaryStrategy: ItemStrategy = {
  update: (item) => {
    item.quality = LEGENDARY_QUALITY;
  },
};
