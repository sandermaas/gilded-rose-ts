import { Item } from './Item';
import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from './constants';

export interface ItemStrategy {
	update: (item: Item) => void;
}

export type SpecialItemName =
	| typeof AGED_BRIE
	| typeof BACKSTAGE_PASSES
	| typeof SULFURAS;
