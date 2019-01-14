const prg8 = require('./program8');

test ('testcase with no arguments provided (DEFAULT)', () => {
    expect(prg8()).toBe(0.5);
});

test ('Test with 2 4 as arguments', () => {
    expect(prg8(2,4)).toBe(3);
});

test ('test with 2 and -6 with arguments returning negative answer', () => {
    expect(prg8(2,-6)).toBe(-2);
});