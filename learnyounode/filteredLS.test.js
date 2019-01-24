const { main, filterFileName } = require('./filteredLS');

test('Testing if the relevant files are printed', (done) => {
  function callback(filtered) {
    expect(filtered).toEqual(['abc.txt', 'haha.txt']);
    done();
  }
  main('./testQuestion5', 'txt', callback);
});

test('Test to check if relevant extension files are filtered', () => {
  expect(filterFileName(['test1.js', 'helloworld.txt', 'abhinav.txt', '11.txt'], 'txt')).toEqual(['helloworld.txt', 'abhinav.txt', '11.txt']);
});

test('Test to check if empty array returned if no relevant files exist', () => {
  expect(filterFileName(['test1.js', 'helloworld.txt', 'abhinav.txt', '11.txt'], 'md')).toEqual([]);
});

test('Test to check if empty array returned and empty list passed', () => {
  expect(filterFileName([], 'md')).toEqual([]);
});
