//To ensure clean and modern code Base, I use ES6 syntax
import { add } from './calculator.js';

describe('String Calculator', () => {

     
    test('new test case', () => {
        expect(add("1,2,3,4,5,6,7,8,9,10",3,5)).toBe(12);
    });

    
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

    test('supports custom delimiter', () => {
        expect(add("//*\n1*2")).toBe(2);
    });

    test('throws exception for negative numbers', () => {
        expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
    });

    
    test('supports delimiters of any length', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test('supports multiple single character delimiters', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test('supports multiple delimiters of any length', () => {
        expect(add("//[***][%%]\n1***2%%3")).toBe(6);
    });

    test('handles mix of single and multi-char delimiters', () => {
        expect(add("//[*][%%][#]\n1*2%%3#4")).toBe(10);
    });



    test('ignores numbers bigger than 500', () => {
        expect(add("2,501")).toBe(2);
    });


});
