const prg8 = require('./program8');

test ('test1 for program8', () => {
    expect(prg8()).toBe(0.5);
});

test ('test2 for program8', () => {
    expect(prg8(2,4)).toBe(3);
});

test ('test3 for program8', () => {
    expect(prg8(2,-6)).toBe(-2);
});