import { SULFURAS } from '../constants';
import { Item } from '../Item';

import { sulfurasStrategy } from './sulfuras-strategy';

describe('sulfurasStrategy', () => {
	describe('update', () => {
		it('should not decrease the sellIn', () => {
			const itemWithSellIn0 = new Item(SULFURAS, 0, 5);
			const itemWithSellInNegative = new Item(SULFURAS, -4, 5);
			const itemWithSellInPositive = new Item(SULFURAS, 7, 5);

			sulfurasStrategy.update(itemWithSellIn0);
			sulfurasStrategy.update(itemWithSellInNegative);
			sulfurasStrategy.update(itemWithSellInPositive);

			expect(itemWithSellIn0.sellIn).toBe(0);
			expect(itemWithSellInNegative.sellIn).toBe(-4);
			expect(itemWithSellInPositive.sellIn).toBe(7);
		});

		it('should always have a quality of 80', () => {
			const itemWithSellIn0 = new Item(SULFURAS, 0, 55);
			const itemWithSellInNegative = new Item(SULFURAS, -4, 80);
			const itemWithSellInPositive = new Item(SULFURAS, 7, -23);

			sulfurasStrategy.update(itemWithSellIn0);
			sulfurasStrategy.update(itemWithSellInNegative);
			sulfurasStrategy.update(itemWithSellInPositive);

			expect(itemWithSellIn0.quality).toBe(80);
			expect(itemWithSellInNegative.quality).toBe(80);
			expect(itemWithSellInPositive.quality).toBe(80);
		});
	});
});
