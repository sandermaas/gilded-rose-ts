import type { ItemStrategy } from '../types';

export const legendaryStrategy: ItemStrategy = {
  update: (item) => {
    item.quality = 80;
  },
};
