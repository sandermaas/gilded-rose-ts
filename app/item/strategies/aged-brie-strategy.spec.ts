import { AGED_BRIE, MAX_QUALITY } from '../constants';
import { Item } from '../Item';

import { agedBrieStrategy } from './aged-brie-strategy';

describe('agedBrieStrategy', () => {
	describe('update', () => {
		it('should decrease the sellIn by 1', () => {
			const itemWithSellIn0 = new Item(AGED_BRIE, 0, 5);
			const itemWithSellInNegative = new Item(AGED_BRIE, -4, 5);
			const itemWithSellInPositive = new Item(AGED_BRIE, 7, 5);

			agedBrieStrategy.update(itemWithSellIn0);
			agedBrieStrategy.update(itemWithSellInNegative);
			agedBrieStrategy.update(itemWithSellInPositive);

			expect(itemWithSellIn0.sellIn).toBe(-1);
			expect(itemWithSellInNegative.sellIn).toBe(-5);
			expect(itemWithSellInPositive.sellIn).toBe(6);
		});

		it('should increase the quality by 1 when sellIn is higher than 0', () => {
			const itemWithSellin3 = new Item(AGED_BRIE, 3, 12);
			const itemWithSellin25 = new Item(AGED_BRIE, 25, 7);

			agedBrieStrategy.update(itemWithSellin3);
			agedBrieStrategy.update(itemWithSellin25);

			expect(itemWithSellin3.quality).toBe(13);
			expect(itemWithSellin25.quality).toBe(8);
		});

		it('should increase the quality by 2 when sellIn is 0 or less', () => {
			const itemWithSellIn0 = new Item(AGED_BRIE, 0, 5);
			const itemWithSellInNegative = new Item(AGED_BRIE, -8, 6);

			agedBrieStrategy.update(itemWithSellIn0);
			agedBrieStrategy.update(itemWithSellInNegative);

			expect(itemWithSellIn0.quality).toBe(7);
			expect(itemWithSellInNegative.quality).toBe(8);
		});

		it('should not increase the quality of an item over MAX_QUALITY', () => {
			const itemWithSellInNegative = new Item(AGED_BRIE, -3, 49);
			const itemWithSellInPositive = new Item(AGED_BRIE, 6, 50);

			agedBrieStrategy.update(itemWithSellInNegative);
			agedBrieStrategy.update(itemWithSellInPositive);

			expect(itemWithSellInNegative.quality).toBe(MAX_QUALITY);
			expect(itemWithSellInPositive.quality).toBe(MAX_QUALITY);
		});
	});
});
