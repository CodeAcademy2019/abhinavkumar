const prg2 = require('./program2');

test('Test should print lower cased name',() => {
    let name = 'BRUCE';
    expect(prg2(name)).toEqual(`Hello, ${name}!\nYour name lowercased is "bruce".`)
});

test('Test should print lower cased name',() => {
    let name = 'ABHINAV';
    expect(prg2(name)).toEqual(`Hello, ${name}!\nYour name lowercased is "abhinav".`)
});

test('Should not change already lower case!',() => {
    let name = 'messi';
    expect(prg2(name)).toEqual(`Hello, ${name}!\nYour name lowercased is "messi".`)
});

test('Combination of lower and upper case to Lower case',() => {
    let name = 'rOnAlDo';
    expect(prg2(name)).toEqual(`Hello, ${name}!\nYour name lowercased is "ronaldo".`)
});

test('test for checking lower case staying lower case after function',() => {
    let name = 'messi';
    expect(prg2(name)).not.toEqual(`Hello, ${name}!\nYour name lowercased is "MESSI".`)
});