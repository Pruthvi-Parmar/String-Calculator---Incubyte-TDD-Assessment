import { add } from './calculator.js';

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns number itself for single number', () => {
  expect(add("1")).toBe(1);
});

});
