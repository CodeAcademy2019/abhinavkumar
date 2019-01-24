const numOfNewLines = require('./firstio');

test('Testing the function to correctly calculate the number of new lines with 4 newlines with text', () => {
  expect(numOfNewLines('./test.txt')).toEqual(4);
});

test('Testing the function to correctly calculate the number of newlines with 2 newlines before text ', () => {
  expect(numOfNewLines('./test1.txt')).toEqual(3);
});

test('Testing the function to correctly calculate the number of new lines with only newlines ', () => {
  expect(numOfNewLines('./test2.txt')).toEqual(5);
});