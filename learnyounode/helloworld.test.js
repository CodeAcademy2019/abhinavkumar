const msg = require('./helloworld');

test ('Test to check if correct msg is printed!', () => {
    expect(msg).toEqual('HELLO WORLD');
})