const findNewLines = require('./asyncIO');

test('Testing if file read and finds the correct number of new lines in the file', (done) => {
  function callbackTest(l) {
    expect(l).toEqual(4);
    done();
  }
  findNewLines('./test.txt', callbackTest);
  console.log('testcase1');
});

test('Testing if file read and finds the correct number of new lines in the file', (done) => {
  function callbackTest(l) {
    expect(l).toEqual(3);
    done();
  }
  findNewLines('./test1.txt', callbackTest);
  console.log('testcase2');
});
