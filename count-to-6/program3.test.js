const prg3 = require('./program3');

test('Test to check first characters  of an array of strings are recorded',() => {
    inputs = ['Hello','arrow','functions'];
    expect(prg3(inputs)).toEqual(`${inputs} becomes "Haf"`);
});

test('test to check if Case is maintained while recording first characters from array',() => {
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