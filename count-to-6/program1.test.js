const prg1 = require('./program1');

test('prints HELLO ES6',() => {
    expect(prg1()).toEqual('HELLO ES6');
});

test('Should not print hello es6',() => {
    expect(prg1()).not.toEqual('hello es6');
});