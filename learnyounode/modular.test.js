const { fileFilter, filterExt } = require('./module');

test('test to check .txt files filtered', () => {
  expect(filterExt(['abc.txt', 'def.ghi', 'abhinav.txt', 'abc.md'], 'txt')).toEqual(['abc.txt', 'abhinav.txt']);
});

test('test to check on .txt file is correctly filtered', () => {
  expect(filterExt(['abc.txt'], 'txt')).toEqual(['abc.txt']);
});
