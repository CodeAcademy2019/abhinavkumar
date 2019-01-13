const prg2 = require('./program2');

test('testing program 2',() => {
    var name = prg2();
    var lowerName = name.toLowerCase();
    expect(prg2()).toBe(`Hello, ${name}!\nYour name lowercased is "${lowerName}".`)
});