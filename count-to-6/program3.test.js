const prg3 = require('./program3');

test('test1 program 3',() => {
    inputs = ['Hello','arrow','functions'];
    expect(prg3(inputs)).toBe(`${inputs} becomes "Haf"`);
});
test('test2 program 3',() => {
    inputs = ['Very','good','functions'];
    expect(prg3(inputs)).toBe(`${inputs} becomes "Vgf"`);
});
test('test3 program 3',() => {
    inputs = ['Clean','looking','functions'];
    expect(prg3(inputs)).toBe(`${inputs} becomes "Clf"`);
});