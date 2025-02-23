import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from '../constants';
import type { ItemStrategy, SpecialItemName } from '../types';

import { agedBrieStrategy } from './aged-brie-strategy';
import { backstagePassesStrategy } from './backstage-passes-strategy';
import { defaultStrategy } from './default-strategy';
import { sulfurasStrategy } from './sulfuras-strategy';

const specialItemStrategies: Record<SpecialItemName, ItemStrategy> = {
	[AGED_BRIE]: agedBrieStrategy,
	[BACKSTAGE_PASSES]: backstagePassesStrategy,
	[SULFURAS]: sulfurasStrategy,
};

export function getItemStrategy(name: string): ItemStrategy {
	return specialItemStrategies[name] ?? defaultStrategy;
}
