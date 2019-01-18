const objectReceived = require('./valuesAndPromises');

test('Testing if promise .then finally prints DR MANHATTAN', () => {
    expect(objectReceived.str[0]).toEqual('DR. MANHATTAN');
})

test('Testing if promise resolves with MANHATTAN', () => {
    expect(objectReceived.promise).resolves.toEqual('MANHATTAN');
})