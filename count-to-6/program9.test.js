const prg9 = require('./program9');

test ('test for Hi should print Hi!! (DEFAULT)', () => {
    expect(prg9('Hi')).toEqual('Hi!!')
});

test ('test for (hi,5) should print hi!!!!!', () => {
    expect(prg9('hi',5)).toEqual('hi!!!!!');
});

test ('test for (hi,5) should not print HI!!!!!', () => {
    expect(prg9('hi',5)).not.toEqual('HI!!!!!');
});