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

	it('should decrease the quality of an item by 2 when sellIn is 0 or less', () => {
		const fooItem = new Item('foo', 0, 10);
		const barItem = new Item('bar', -2, 5);

		const gildedRose = new GildedRose([fooItem, barItem]);

		gildedRose.updateQuality();

		expect(fooItem.quality).toBe(8);
		expect(fooItem.sellIn).toBe(-1);
		expect(barItem.quality).toBe(3);
		expect(barItem.sellIn).toBe(-3);
	});

	it('should not decrease the quality of an item below 0', () => {
		const fooItem = new Item('foo', 20, 0);
		const barItem = new Item('bar', -4, 0);

		const gildedRose = new GildedRose([fooItem, barItem]);

		gildedRose.updateQuality();

		expect(fooItem.quality).toBe(0);
		expect(fooItem.sellIn).toBe(19);
		expect(barItem.quality).toBe(0);
		expect(barItem.sellIn).toBe(-5);
	});
});
