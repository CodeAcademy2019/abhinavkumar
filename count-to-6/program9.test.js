const prg9 = require('./program9');

test ('test1 for program 9', () => {
    expect(prg9('Hi')).toBe('Hi!!')
});

test ('test2 for program 9', () => {
    expect(prg9('hi',5)).toBe('hi!!!!!');
});

test ('test3 for program 9', () => {
    expect(prg9('HELLO')).toBe('HELLO!!!!!')
});