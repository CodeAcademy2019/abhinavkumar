const rejectPromise = require('./rejectPromise');

const prm = rejectPromise();

test('Testing if promise rejected with error', () => {
    expect.assertions(1);
    
    return expect(prm).rejects.toEqual(new Error('REJECTED!'));
});

jest.useFakeTimers();

rejectPromise();

test ('Testing if callback function called only after 300ms', () => {
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
});
