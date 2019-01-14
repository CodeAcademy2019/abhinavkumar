const prg7 = require('./program7');

test ('test1 for program7', () => {
    expect(prg7(1,2,3)).toBe(2);
});

test ('test2 for program7', () => {
    expect(prg7(-100,100)).toBe(0);
});

test ('test2 for program7', () => {
    expect(prg7(1,1,2,3,5,8,13,21,34,55)).toBe(14.3);
});