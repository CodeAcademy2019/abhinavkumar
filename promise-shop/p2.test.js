const p = require('./fulfillAPromise');

jest.useFakeTimers(); 
//let prm = p();
test('testing if promise fulfilled and correct msg is printed', () =>{
    expect.assertions(1);
    return p.then( data =>{
        expect(data).toEqual('FULFILLED!');
    } );
} );

// test('Test if promise fulfilled after 300ms', () =>{
//     expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function),300);
// })