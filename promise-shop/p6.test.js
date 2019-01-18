const promised = require('./shortcuts');

//onst p = promised();

test('Testing if correct error caught by .catch' ,() => {
    return expect(promised.promise).rejects.toEqual(new Error('REJECTED!!!!'));

});

test('Testing if promise fulfilled with correct message' ,() => {
    return expect(promised.promise1).resolves.toEqual('Promise fulfilled!!!');

}); 