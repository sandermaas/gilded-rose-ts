import { GildedRose, Item } from '@/gilded-rose';

const AGED_BRIE = 'Aged Brie';

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

	it('should increase the quality of AGED_BRIE by 1', () => {
		const agedBrieItem = new Item(AGED_BRIE, 3, 5);

		const gildedRose = new GildedRose([agedBrieItem]);

		gildedRose.updateQuality();

		expect(agedBrieItem.quality).toBe(6);
		expect(agedBrieItem.sellIn).toBe(2);
	});

	it('should not increase the quality of an item over 50', () => {
		const agedBrieItem = new Item(AGED_BRIE, 6, 50);

		const gildedRose = new GildedRose([agedBrieItem]);

		gildedRose.updateQuality();

		expect(agedBrieItem.quality).toBe(50);
		expect(agedBrieItem.sellIn).toBe(5);
	});
});
