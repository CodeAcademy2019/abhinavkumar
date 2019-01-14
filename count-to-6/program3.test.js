const prg3 = require('./program3');

test('Test to check first characters and recorded of an array of strings',() => {
    inputs = ['Hello','arrow','functions'];
    expect(prg3(inputs)).toEqual(`${inputs} becomes "Haf"`);
});

test('test to check if Case is maintained',() => {
    inputs = ['Hello','arrow','functions'];
    expect(prg3(inputs)).not.toEqual(`${inputs} becomes "haf"`);
});

test('Testcase II',() => {
    inputs = ['Very','good','functions'];
    expect(prg3(inputs)).toEqual(`${inputs} becomes "Vgf"`);
});
test('test3',() => {
    inputs = ['Clean','looking','functions'];
    expect(prg3(inputs)).toEqual(`${inputs} becomes "Clf"`);
});