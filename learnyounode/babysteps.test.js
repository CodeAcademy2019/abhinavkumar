const findSum = require('./babysteps');

test('Test to check if sum calculated correctly', () => {
  expect(findSum([1, 2, 3, 4, 5])).toEqual(15);
});

test('Test to check if sum calculated correctly with inputs all zeros', () => {
  expect(findSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toEqual(0);
});

test('Test to check if sum calculated correctly with inputs containing negative numbers', () => {
  expect(findSum([-1, 0, 1, 0, -3])).toEqual(-3);
});

test('Test to check if sum calculated correctly with 1 array element', () => {
  expect(findSum([-1])).toEqual(-1);
});

test('Test to check if sum calculated correctly with 1 array element', () => {
  expect(findSum([-1])).toEqual(-1);
});

test('Test to check if sum calculated correctly with no array element', () => {
  expect(findSum([])).toEqual(0);
});