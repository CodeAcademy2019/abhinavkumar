const promise = require('./fulfillAPromise');


test('testing if promise fulfilled and correct msg is printed', () => {
    //expect.assertions(1);
    return expect(promise).resolves.toEqual('FULFILLED!');
} );

test('testing if promise is fulfilled with only correct message', () => {
    //expect.assertions(1);
    return expect(promise).resolves.not.toEqual('Rejected!');
} );


// jest.useFakeTimers(); 
// p();
// test('Test if promise fulfilled after 300ms', () => {
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
// })