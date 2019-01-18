const rule = require('./importantRule');

test('Checking if outputs printed in correct order', () => {
    expect(rule.ooo).toEqual([1,2,3,4,5,'OH NOES']);
});

test('Test to check if promise rejects with error', () => {
    expect(rule.promise).rejects.toEqual(new Error('OH NOES!'));
});