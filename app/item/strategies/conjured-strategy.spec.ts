import { Item } from '../Item';

import { conjuredStrategy } from './conjured-strategy';

describe('conjuredStrategy', () => {
	describe('update', () => {
		it('should decrease the sellIn by 1', () => {
			const itemWithSellIn0 = new Item('foo', 0, 5);
			const itemWithSellInNegative = new Item('foo', -4, 5);
			const itemWithSellInPositive = new Item('foo', 7, 5);

			conjuredStrategy.update(itemWithSellIn0);
			conjuredStrategy.update(itemWithSellInNegative);
			conjuredStrategy.update(itemWithSellInPositive);

			expect(itemWithSellIn0.sellIn).toBe(-1);
			expect(itemWithSellInNegative.sellIn).toBe(-5);
			expect(itemWithSellInPositive.sellIn).toBe(6);
		});

		it('should decrease the quality by 2 when sellIn is higher than 0', () => {
			const itemWithSellIn3 = new Item('foo', 3, 12);
			const itemWithSellIn16 = new Item('foo', 16, 7);

			conjuredStrategy.update(itemWithSellIn3);
			conjuredStrategy.update(itemWithSellIn16);

			expect(itemWithSellIn3.quality).toBe(10);
			expect(itemWithSellIn16.quality).toBe(5);
		});

		it('should decrease the quality by 4 when sellIn is 0 or less', () => {
			const itemWithSellIn0 = new Item('foo', 0, 10);
			const itemWithSellInNegative = new Item('foo', -8, 5);

			conjuredStrategy.update(itemWithSellIn0);
			conjuredStrategy.update(itemWithSellInNegative);

			expect(itemWithSellIn0.quality).toBe(6);
			expect(itemWithSellInNegative.quality).toBe(1);
		});

		it('should not decrease the quality below 0', () => {
			const itemWithSellInNegative = new Item('foo', -8, 2);
			const itemWithSellInPositive = new Item('foo', 8, 1);

			conjuredStrategy.update(itemWithSellInNegative);
			conjuredStrategy.update(itemWithSellInPositive);

			expect(itemWithSellInNegative.quality).toBe(0);
			expect(itemWithSellInPositive.quality).toBe(0);
		});
	});
});
