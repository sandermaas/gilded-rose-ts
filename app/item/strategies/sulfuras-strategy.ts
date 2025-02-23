import type { ItemStrategy } from '../types';

export const sulfurasStrategy: ItemStrategy = {
	update: (item) => {
		item.quality = 80;
	},
};
