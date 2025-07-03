import { add } from './calculator.js';

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
  });

  test('returns number itself for single number', () => {
  expect(add("1")).toBe(1);
});

test('returns sum for two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

test('returns sum for multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws exception for negative numbers', () => {
  expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});


});
