import { GildedRose, Item } from '@/gilded-rose';

const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
const SULFURAS = 'Sulfuras, Hand of Ragnaros';

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

	it('should not decrease the quality or sellIn of the SULFURAS item', () => {
		const sulfurasItem = new Item(SULFURAS, 10, 10);

		const gildedRose = new GildedRose([sulfurasItem]);

		gildedRose.updateQuality();

		expect(sulfurasItem.quality).toBe(10);
		expect(sulfurasItem.sellIn).toBe(10);
	});

	it('should increase the quality of BACKSTAGE_PASSES by 1 when sellIn is higher than 10', () => {
		const passesWithSellin11Item = new Item(BACKSTAGE_PASSES, 11, 2);
		const passesWithSellin20Item = new Item(BACKSTAGE_PASSES, 20, 4);

		const gildedRose = new GildedRose([
			passesWithSellin11Item,
			passesWithSellin20Item,
		]);

		gildedRose.updateQuality();

		expect(passesWithSellin11Item.quality).toBe(3);
		expect(passesWithSellin11Item.sellIn).toBe(10);
		expect(passesWithSellin20Item.quality).toBe(5);
		expect(passesWithSellin20Item.sellIn).toBe(19);
	});

	it('should increase the quality of BACKSTAGE_PASSES by 2 when sellIn is between 6 and 10', () => {
		const passesWithSellin6Item = new Item(BACKSTAGE_PASSES, 6, 3);
		const passesWithSellin10Item = new Item(BACKSTAGE_PASSES, 10, 5);

		const gildedRose = new GildedRose([
			passesWithSellin6Item,
			passesWithSellin10Item,
		]);

		gildedRose.updateQuality();

		expect(passesWithSellin6Item.quality).toBe(5);
		expect(passesWithSellin6Item.sellIn).toBe(5);
		expect(passesWithSellin10Item.quality).toBe(7);
		expect(passesWithSellin10Item.sellIn).toBe(9);
	});

	it('should increase the quality of BACKSTAGE_PASSES by 3 when sellIn is between 1 and 5', () => {
		const passesWithSellin1Item = new Item(BACKSTAGE_PASSES, 1, 4);
		const passesWithSellin5Item = new Item(BACKSTAGE_PASSES, 5, 6);

		const gildedRose = new GildedRose([
			passesWithSellin1Item,
			passesWithSellin5Item,
		]);

		gildedRose.updateQuality();

		expect(passesWithSellin1Item.quality).toBe(7);
		expect(passesWithSellin5Item.quality).toBe(9);
	});

	it('should set quality of BACKSTAGE_PASSES to 0 when sellIn is 0 or less', () => {
		const backstagePassesItem = new Item(BACKSTAGE_PASSES, 0, 8);

		const gildedRose = new GildedRose([backstagePassesItem]);

		gildedRose.updateQuality();

		expect(backstagePassesItem.quality).toBe(0);
		expect(backstagePassesItem.sellIn).toBe(-1);
	});
});
