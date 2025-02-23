import { CONJURED_MANA_CAKE, MIN_QUALITY } from '../constants';
import { Item } from '../Item';

import { conjuredStrategy } from './conjured-strategy';

describe('conjuredStrategy', () => {
	describe('update', () => {
		it('should decrease the sellIn by 1', () => {
			const items = [
				new Item(CONJURED_MANA_CAKE, 0, 5),
				new Item(CONJURED_MANA_CAKE, -4, 5),
				new Item(CONJURED_MANA_CAKE, 7, 5),
			];

			items.forEach((item) => {
				conjuredStrategy.update(item);
			});

			expect(items[0].sellIn).toBe(-1);
			expect(items[1].sellIn).toBe(-5);
			expect(items[2].sellIn).toBe(6);
		});

		it('should decrease the quality by 2 when sellIn is higher than 0', () => {
			const items = [
				new Item(CONJURED_MANA_CAKE, 3, 12),
				new Item(CONJURED_MANA_CAKE, 16, 7),
			];

			items.forEach((item) => {
				conjuredStrategy.update(item);
			});

			expect(items[0].quality).toBe(10);
			expect(items[1].quality).toBe(5);
		});

		it('should decrease the quality by 4 when sellIn is 0 or less', () => {
			const items = [
				new Item(CONJURED_MANA_CAKE, 0, 10),
				new Item(CONJURED_MANA_CAKE, -8, 5),
			];

			items.forEach((item) => {
				conjuredStrategy.update(item);
			});

			expect(items[0].quality).toBe(6);
			expect(items[1].quality).toBe(1);
		});

		it('should not decrease the quality below MIN_QUALITY', () => {
			const items = [
				new Item(CONJURED_MANA_CAKE, -8, 2),
				new Item(CONJURED_MANA_CAKE, 8, 1),
			];

			items.forEach((item) => {
				conjuredStrategy.update(item);
			});

			expect(items[0].quality).toBe(MIN_QUALITY);
			expect(items[1].quality).toBe(MIN_QUALITY);
		});
	});
});
