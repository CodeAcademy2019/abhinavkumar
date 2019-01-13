const findSqrt = require('./findSqrt');

test('finds sqrt of 4', () => {
    expect(findSqrt(4)).toBe(2);
});

test('finds sqrt of 16', () => {
    expect(findSqrt(16)).toBe(4);
});

test('finds sqrt of -16', () => {
    expect(findSqrt(-16)).toBe(':(');
});