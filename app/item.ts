import { AGED_BRIE, BACKSTAGE_PASSES, SULFURAS } from '@/constants';

export class Item {
	name: string;
	sellIn: number;
	quality: number;

	constructor(name, sellIn, quality) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}

	update() {
		switch (this.name) {
			case AGED_BRIE:
				this.updateAgedBrie();
				break;
			case BACKSTAGE_PASSES:
				this.updateBackstagePasses();
				break;
			case SULFURAS:
				this.updateSulfuras();
				break;
			default:
				this.updateDefault();
		}

		if (this.quality < 0) {
			this.quality = 0;
		}
		if (this.quality > 50 && this.name !== SULFURAS) {
			this.quality = 50;
		}
	}

	updateAgedBrie() {
		const qualityIncrease = this.sellIn > 0 ? 1 : 2;

		this.quality += qualityIncrease;
		this.sellIn -= 1;
	}

	updateBackstagePasses() {
		let qualityIncrease = 1;

		if (this.sellIn > 5 && this.sellIn <= 10) {
			qualityIncrease = 2;
		}
		if (this.sellIn > 0 && this.sellIn <= 5) {
			qualityIncrease = 3;
		}

		this.quality = this.sellIn > 0 ? this.quality + qualityIncrease : 0;
		this.sellIn -= 1;
	}

	updateDefault() {
		const qualityDecrease = this.sellIn > 0 ? 1 : 2;

		this.quality -= qualityDecrease;
		this.sellIn -= 1;
	}

	updateSulfuras() {
		this.quality = 80;
	}
}
