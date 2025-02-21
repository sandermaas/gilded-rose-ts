import { GildedRose, Item } from '@/gilded-rose';

describe('Gilded Rose', () => {
	it('should decrease the quality and sellin of an item by 1', () => {
		const fooItem = new Item('foo', 2, 10);
		const barItem = new Item('bar', 4, 5);

		const gildedRose = new GildedRose([fooItem, barItem]);

		gildedRose.updateQuality();

		expect(fooItem.quality).toBe(9);
		expect(fooItem.sellIn).toBe(1);
		expect(barItem.quality).toBe(4);
		expect(barItem.sellIn).toBe(3);
	});
});
