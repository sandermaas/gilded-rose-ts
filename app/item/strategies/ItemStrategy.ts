import { Item } from '../Item';
import {
  AGED_BRIE,
  BACKSTAGE_PASSES,
  CONJURED_ITEMS,
  LEGENDARY_ITEMS,
} from '../constants';

import { agedBrieStrategy } from './aged-brie-strategy';
import { backstagePassesStrategy } from './backstage-passes-strategy';
import { conjuredStrategy } from './conjured-strategy';
import { defaultStrategy } from './default-strategy';
import { legendaryStrategy } from './legendary-strategy';

export abstract class ItemStrategy {
  abstract update(item: Item): void;

  static getStrategy(itemName: string) {
    if (itemName === AGED_BRIE) {
      return agedBrieStrategy;
    }
    if (itemName === BACKSTAGE_PASSES) {
      return backstagePassesStrategy;
    }
    if (CONJURED_ITEMS.includes(itemName)) {
      return conjuredStrategy;
    }
    if (LEGENDARY_ITEMS.includes(itemName)) {
      return legendaryStrategy;
    }

    return defaultStrategy;
  }
}
