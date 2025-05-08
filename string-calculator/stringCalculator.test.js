const { add } = require('./stringCalculator');

describe('String Calculator', () => {
  test('returns 0 for empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the number for a single number string', () => {
    expect(add('1')).toBe(1);
  });

  test('returns the sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('returns the sum of any amount of numbers', () => {
    expect(add('1,2,3,4,5')).toBe(15);
  });

  test('handles new lines as delimiters', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiters', () => {
    expect(add('//;\n1;2')).toBe(3);
  });

  test('throws exception for negative numbers', () => {
    expect(() => add('-1,2')).toThrow('negative numbers not allowed -1');
  });

  test('shows all negative numbers in exception message', () => {
    expect(() => add('2,-4,3,-5')).toThrow('negative numbers not allowed -4,-5');
  });
});