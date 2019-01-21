const numOfNewLines = require('./firstio');

test('Testing the function to correctly calculate the number of new lines in the testfile', () => {
    expect(numOfNewLines('./test.txt')).toEqual(4)
});

test('Testing the function to correctly calculate the number of new lines in the testfile2 ', () => {
    expect(numOfNewLines('./test1.txt')).toEqual(3)
});

test('Testing the function to correctly calculate the number of new lines in the testfile2 ', () => {
    expect(numOfNewLines('./test2.txt')).toEqual(5)
});