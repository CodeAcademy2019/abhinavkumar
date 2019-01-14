const prg7 = require('./program7');

test ('Test 1 with numbers 1 2 and 3', () => {
    expect(prg7(1,2,3)).toEqual(2);
});

test ('Test with no input', () => {
    expect(prg7()).toEqual(NaN);
});

test ('Test with only zero as input', () => {
    expect(prg7(0)).toEqual(0);
});
