const mainFunc = require('./filteredLS');

test('Testing if the relevant files are printed', (done) => {
  function callback(filtered) {
    expect(filtered).toEqual(['abc.md', 'haha.txt']);
    done();
  }
  mainFunc('./testQuestion5', 'txt', callback);
});