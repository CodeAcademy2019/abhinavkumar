const promised = require('./shortcuts');

//onst p = promised();

test('Testing if correct error caught by .catch' ,() => {
    return expect(promised).rejects.toEqual(new Error('REJECTED!!!!'));

});