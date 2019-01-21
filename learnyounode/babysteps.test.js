const findSum = require('./babysteps');

test('Test to check if sum calculated correctly', () => {
    expect(findSum(['1','2','3','4','5'])).toEqual(15);
})

test('Test to check if sum calculated correctly with inputs all zeros', () => {
    expect(findSum(['0','0','0','0'])).toEqual(0);
})
