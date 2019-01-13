const prg1 = require('./program1');

test('prints HELLO ES6',()=>{
    expect(prg1()).toBe('HELLO ES6');
});