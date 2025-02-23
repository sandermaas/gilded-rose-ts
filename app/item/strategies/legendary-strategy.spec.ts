import { LEGENDARY_QUALITY, SULFURAS } from '../constants';
import { Item } from '../Item';

import { legendaryStrategy } from './legendary-strategy';

describe('legendaryStrategy', () => {
	describe('update', () => {
		it('should not decrease the sellIn', () => {
			const items = [
				new Item(SULFURAS, 0, 5),
				new Item(SULFURAS, -4, 5),
				new Item(SULFURAS, 7, 5),
			];

			items.forEach((item) => {
				legendaryStrategy.update(item);
			});

			expect(items[0].sellIn).toBe(0);
			expect(items[1].sellIn).toBe(-4);
			expect(items[2].sellIn).toBe(7);
		});

		it('should always have a quality of LEGENDARY_QUALITY', () => {
			const items = [
				new Item(SULFURAS, 0, 55),
				new Item(SULFURAS, -4, 80),
				new Item(SULFURAS, 7, -23),
			];

			items.forEach((item) => {
				legendaryStrategy.update(item);
			});

			expect(items[0].quality).toBe(LEGENDARY_QUALITY);
			expect(items[1].quality).toBe(LEGENDARY_QUALITY);
			expect(items[2].quality).toBe(LEGENDARY_QUALITY);
		});
	});
});
