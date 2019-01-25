const juggler = require('./jugglingAsync');

describe('Juggling asycn requests ', () => {
  it('should receive info from http URL', (done) => {
    function callbackF(data) {
      expect(data).toEqual(['Hello', 'World!', 'Abhinav!']);
      done();
    }
    const urls = ['http://localhost:4000/', 'http://localhost:4000/world', 'http://localhost:4000/abhinav'];
    for (let i = 0; i < 3; i += 1) {
      juggler(urls[i], i, callbackF);
    }
  });
});