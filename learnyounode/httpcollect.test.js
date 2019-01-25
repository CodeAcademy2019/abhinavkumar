const httpCollect = require('./httpCollect');

describe('httpCollect()', () => {
  it('should receive info from http URL', (done) => {
    function callbackF(data) {
      expect(data).toEqual('HELLO WORLD!hello world!');
      done();
    }
    process.argv = ['node', '8-http-collect.js', 'http://localhost:4000'];
    httpCollect(callbackF);
  });
});
