const rejectPromise = require('./rejectPromise');

//const prm = rejectPromise();

test('Testing if promise rejected with error', () => {
    //expect.assertions(1);
    
    return expect(rejectPromise).rejects.toEqual(new Error('REJECTED!'));
});

test('Testing if promise not rejected with wrong message', () => {
    
    return expect(rejectPromise).rejects.not.toEqual(new Error('reject!'));
});


// jest.useFakeTimers();

// rejectPromise();

// test ('Testing if callback function called only after 300ms', () => {
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
// });
