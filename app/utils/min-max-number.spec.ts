import { minMaxNumber } from './min-max-number';

describe('min-max-number', () => {
	it('should return the value when it is higher than min and lower than max', () => {
		const value = 5;
		const min = 0;
		const max = 10;

		expect(minMaxNumber(value, min, max)).toBe(value);
	});

	it('should return max when the value is higher than max', () => {
		const value = 15;
		const min = 2;
		const max = 8;

		expect(minMaxNumber(value, min, max)).toBe(max);
	});

	it('should return min when the value is lower than min', () => {
		const value = 2;
		const min = 6;
		const max = 15;

		expect(minMaxNumber(value, min, max)).toBe(min);
	});
});
