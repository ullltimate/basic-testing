// Uncomment the code below and write your tests
import {  simpleCalculator, Action } from './index';

const testCases = [
    { a: 1, b: 2, action: Action.Add, expected: 3 },
    { a: 2, b: 2, action: Action.Add, expected: 4 },
    { a: 3, b: 2, action: Action.Add, expected: 5 },
    { a: 3, b: 2, action: Action.Subtract, expected: 1 },
    { a: 8, b: 2, action: Action.Subtract, expected: 6 },
    { a: 3, b: 2, action: Action.Multiply, expected: 6 },
    { a: 3, b: 5, action: Action.Multiply, expected: 15 },
    { a: 6, b: 2, action: Action.Divide, expected: 3 },
    { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
    { a: 3, b: '2', action: Action.Add, expected: null },
    { a: 3, b: 2, action: null, expected: null },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)('creating the same tests with different data', ({a, b, action, expected}) => {
    expect(simpleCalculator({a, b, action})).toBe(expected);
  });
  // Consider to use Jest table tests API to test all cases above
});
