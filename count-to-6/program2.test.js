const prg2 = require('./program2');

test('testing program 2',() => {
    let name = 'ABHINAV';
    let lowerName = name.toLowerCase();
    expect(prg2(name)).toBe(`Hello, ${name}!\nYour name lowercased is "${lowerName}".`)
});