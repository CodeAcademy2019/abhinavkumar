const { findNumberOfNewLines, countNumberOfLines } = require('./asyncIO');


test('Testing if file read and finds the correct number of new lines in the file', (done) => {
  const callbackTest = (l) => {
    expect(l).toEqual(4);
    done();
  };

  findNumberOfNewLines('./test.txt', callbackTest);
  console.log('testcase1');
});

test('Testing if file read and finds the correct number of new lines in the file', (done) => {
  const callbackTest = (l) => {
    expect(l).toEqual(3);
    done();
  };

  findNumberOfNewLines('./test1.txt', callbackTest);
  console.log('testcase2');
});

test('Testing to check if newlines counted correctly in a string', () => {
  const str = 'Hello\nMy\nName\nIs\nAbhinav';
  expect(countNumberOfLines(str)).toEqual(4);
});

test('Testing to check if newlines counted correctly in a string statring with newlines', () => {
  const str = '\n\n\n\n\nHello\n';
  expect(countNumberOfLines(str)).toEqual(6);
});

