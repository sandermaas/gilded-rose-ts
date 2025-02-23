import { BACKSTAGE_PASSES, MAX_QUALITY } from '../constants';
import { Item } from '../Item';

import { backstagePassesStrategy } from './backstage-passes-strategy';

describe('backstagePassesStrategy', () => {
	describe('update', () => {
		it('should decrease the sellIn by 1', () => {
			const itemWithSellIn0 = new Item(BACKSTAGE_PASSES, 0, 5);
			const itemWithSellInNegative = new Item(BACKSTAGE_PASSES, -4, 5);
			const itemWithSellInPositive = new Item(BACKSTAGE_PASSES, 7, 5);

			backstagePassesStrategy.update(itemWithSellIn0);
			backstagePassesStrategy.update(itemWithSellInNegative);
			backstagePassesStrategy.update(itemWithSellInPositive);

			expect(itemWithSellIn0.sellIn).toBe(-1);
			expect(itemWithSellInNegative.sellIn).toBe(-5);
			expect(itemWithSellInPositive.sellIn).toBe(6);
		});

		it('should increase the quality by 1 when sellIn is higher than 10', () => {
			const itemWithSellin11 = new Item(BACKSTAGE_PASSES, 11, 2);
			const itemWithSellin20 = new Item(BACKSTAGE_PASSES, 20, 4);

			backstagePassesStrategy.update(itemWithSellin11);
			backstagePassesStrategy.update(itemWithSellin20);

			expect(itemWithSellin11.quality).toBe(3);
			expect(itemWithSellin20.quality).toBe(5);
		});

		it('should increase the quality by 2 when sellIn is between 6 and 10', () => {
			const itemWithSellin6 = new Item(BACKSTAGE_PASSES, 6, 3);
			const itemWithSellin10 = new Item(BACKSTAGE_PASSES, 10, 5);

			backstagePassesStrategy.update(itemWithSellin6);
			backstagePassesStrategy.update(itemWithSellin10);

			expect(itemWithSellin6.quality).toBe(5);
			expect(itemWithSellin10.quality).toBe(7);
		});

		it('should increase the quality by 3 when sellIn is between 1 and 5', () => {
			const itemWithSellin1 = new Item(BACKSTAGE_PASSES, 1, 4);
			const itemWithSellin5 = new Item(BACKSTAGE_PASSES, 5, 6);

			backstagePassesStrategy.update(itemWithSellin1);
			backstagePassesStrategy.update(itemWithSellin5);

			expect(itemWithSellin1.quality).toBe(7);
			expect(itemWithSellin5.quality).toBe(9);
		});

		it('should set quality to 0 when sellIn is 0 or less', () => {
			const itemWithSellin0 = new Item(BACKSTAGE_PASSES, 0, 8);
			const itemWithSellInNegative = new Item(BACKSTAGE_PASSES, -1, 10);

			backstagePassesStrategy.update(itemWithSellin0);
			backstagePassesStrategy.update(itemWithSellInNegative);

			expect(itemWithSellin0.quality).toBe(0);
			expect(itemWithSellInNegative.quality).toBe(0);
		});

		it('should not increase the quality of an item over MAX_QUALITY', () => {
			const itemWithSellin2 = new Item(BACKSTAGE_PASSES, 2, 48);
			const itemWithSellin8 = new Item(BACKSTAGE_PASSES, 8, 49);
			const itemWithSellin12 = new Item(BACKSTAGE_PASSES, 12, 50);

			backstagePassesStrategy.update(itemWithSellin2);
			backstagePassesStrategy.update(itemWithSellin8);
			backstagePassesStrategy.update(itemWithSellin12);

			expect(itemWithSellin2.quality).toBe(MAX_QUALITY);
			expect(itemWithSellin8.quality).toBe(MAX_QUALITY);
			expect(itemWithSellin12.quality).toBe(MAX_QUALITY);
		});
	});
});
