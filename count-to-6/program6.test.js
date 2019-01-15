const prg6 = require('./program6');

test ('Test with negative numbers in array', () => {
    var numbers = [18,-5,7,8];
    expect(prg6(numbers)).toEqual(`The minimum of [${numbers}] is -5`);
});

test ('Test with zero present in array', () => {
    var numbers = [8,15,0,18];
    expect(prg6(numbers)).toEqual(`The minimum of [${numbers}] is 0`);
});

test ('Test with single element in array', () => {
    var numbers = [5];
    expect(prg6(numbers)).toEqual(`The minimum of [${numbers}] is 5`);
});
