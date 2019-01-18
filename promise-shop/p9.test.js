//???????/

let promise = require('./throwAnError');

test('Check if promsie rejects with error message', () => {
    expect(promise).rejects.toEqual('Unexpected token o in JSON at position 1');
});