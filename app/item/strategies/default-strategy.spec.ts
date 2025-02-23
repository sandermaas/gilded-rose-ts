import { Item } from '../Item';

import { defaultStrategy } from './default-strategy';

describe('defaultStrategy', () => {
	describe('update', () => {
		it('should decrease the sellIn by 1', () => {
			const itemWithSellIn0 = new Item('foo', 0, 5);
			const itemWithSellInNegative = new Item('foo', -4, 5);
			const itemWithSellInPositive = new Item('foo', 7, 5);

			defaultStrategy.update(itemWithSellIn0);
			defaultStrategy.update(itemWithSellInNegative);
			defaultStrategy.update(itemWithSellInPositive);

			expect(itemWithSellIn0.sellIn).toBe(-1);
			expect(itemWithSellInNegative.sellIn).toBe(-5);
			expect(itemWithSellInPositive.sellIn).toBe(6);
		});

		it('should decrease the quality by 1 when sellIn is higher than 0', () => {
			const itemWithSellIn3 = new Item('foo', 3, 12);
			const itemWithSellIn16 = new Item('foo', 16, 7);

			defaultStrategy.update(itemWithSellIn3);
			defaultStrategy.update(itemWithSellIn16);

			expect(itemWithSellIn3.quality).toBe(11);
			expect(itemWithSellIn16.quality).toBe(6);
		});

		it('should decrease the quality by 2 when sellIn is 0 or less', () => {
			const itemWithSellIn0 = new Item('foo', 0, 10);
			const itemWithSellInNegative = new Item('foo', -8, 5);

			defaultStrategy.update(itemWithSellIn0);
			defaultStrategy.update(itemWithSellInNegative);

			expect(itemWithSellIn0.quality).toBe(8);
			expect(itemWithSellInNegative.quality).toBe(3);
		});

		it('should not decrease the quality below 0', () => {
			const itemWithSellInNegative = new Item('foo', -8, 1);
			const itemWithSellInPositive = new Item('foo', 8, 0);

			defaultStrategy.update(itemWithSellInNegative);
			defaultStrategy.update(itemWithSellInPositive);

			expect(itemWithSellInNegative.quality).toBe(0);
			expect(itemWithSellInPositive.quality).toBe(0);
		});
	});
});
