const getClient = require('./httpclient');

describe('getClient()', () => {
  it ('should receive info from http URL', (done) => {
    function callbackF(data) {
      expect(data).toEqual('HELLO WORLD!');
      done();
    }
    process.argv = ['node', 'httpclient.js', 'http://localhost:7000'];
    getClient(callbackF);
  });   

  it ('should not receive anything other than info from http URL', (done) => {
    function callbackF(data) {
      expect(data).not.toEqual('hello world\n');
      done();
    }
    process.argv = ['node', 'httpclient.js', 'http://localhost:7000'];
    getClient(callbackF);
  });
});
