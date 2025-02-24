import { LEGENDARY_QUALITY } from '../constants';
import { ItemStrategy } from './ItemStrategy';

export const legendaryStrategy: ItemStrategy = {
  update: (item) => {
    item.quality = LEGENDARY_QUALITY;
  },
};
