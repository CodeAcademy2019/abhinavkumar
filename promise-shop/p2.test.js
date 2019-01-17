const p = require('./fulfillAPromise');


let prm = p();

test('testing if promise fulfilled and correct msg is printed', () => {
    expect.assertions(1);
    return expect(prm).resolves.toBe('FULFILLED!');
} );


jest.useFakeTimers(); 
p();
test('Test if promise fulfilled after 300ms', () => {
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
})