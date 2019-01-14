const prg6 = require('./program6');

test ('Test1 for program 6', () => {
    var numbers = [18,-5,7,8];
    expect(prg6(numbers)).toBe(`The minimum of [${numbers}] is -5`);
});

test ('Test2 for program 6', () => {
    var numbers = [8,15,0,18];
    expect(prg6(numbers)).toBe(`The minimum of [${numbers}] is 0`);
});

test ('Test3 for program 6', () => {
    var numbers = [5,1,7,8];
    expect(prg6(numbers)).toBe(`The minimum of [${numbers}] is 1`);
});
