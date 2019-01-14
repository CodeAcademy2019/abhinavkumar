const prg2 = require('./program2');

test('test1 program 2',() => {
    let name = 'BRUCE';
    expect(prg2(name)).toBe(`Hello, ${name}!\nYour name lowercased is "bruce".`)
});

test('test2 program 2',() => {
    let name = 'ABHINAV';
    expect(prg2(name)).toBe(`Hello, ${name}!\nYour name lowercased is "abhinav".`)
});

test('test3 program 2',() => {
    let name = 'MESSI';
    expect(prg2(name)).toBe(`Hello, ${name}!\nYour name lowercased is "messi".`)
});