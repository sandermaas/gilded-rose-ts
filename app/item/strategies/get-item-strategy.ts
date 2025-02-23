import {
	AGED_BRIE,
	BACKSTAGE_PASSES,
	CONJURED_ITEMS,
	SULFURAS,
} from '../constants';
import type { ItemStrategy } from '../types';

import { agedBrieStrategy } from './aged-brie-strategy';
import { backstagePassesStrategy } from './backstage-passes-strategy';
import { conjuredStrategy } from './conjured-strategy';
import { defaultStrategy } from './default-strategy';
import { sulfurasStrategy } from './sulfuras-strategy';

export function getItemStrategy(name: string): ItemStrategy {
	if (name === AGED_BRIE) {
		return agedBrieStrategy;
	}
	if (name === BACKSTAGE_PASSES) {
		return backstagePassesStrategy;
	}
	if (CONJURED_ITEMS.includes(name)) {
		return conjuredStrategy;
	}
	if (name === SULFURAS) {
		return sulfurasStrategy;
	}

	return defaultStrategy;
}
