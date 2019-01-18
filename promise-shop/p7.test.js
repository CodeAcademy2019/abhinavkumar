//DON't KNOW!

const promises = require('./PafterP');

test('Testing if promise1 resolves with value SECRET KEY', () => {
    expect(promises.promise1).resolves.toEqual('SECRET KEY');
});

test('Testing if promise 2 resolves with RECEIVED SECRET KEY', () => {
    expect(promises.promise2).resolves.toEqual('RECEIVED SECRET KEY');
});