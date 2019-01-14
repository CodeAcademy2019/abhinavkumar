const prg3 = require('./program3');

test('testing program 3',() => {
    inputs = ['Hello','arrow','functions'];
    expect(prg3(inputs)).toBe(`${inputs} becomes "Haf"`);
});