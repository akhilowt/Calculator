const add = require('./stringCalculator');

test('returns 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('returns number itself for single number', () => {
    expect(add("5")).toBe(5);
});

test('returns sum for two numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('supports custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});