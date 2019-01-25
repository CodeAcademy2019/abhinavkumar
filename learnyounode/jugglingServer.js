const http = require('http');


const port = 4000;

http.createServer((req, res) => {
  const url = req.url;

  if (url === '/') {
    res.write('Hello');
    res.end();
  } else if (url === '/world') {
    res.write('World!');
    res.end();
  } else if (url === '/abhinav') {
    res.write('Abhinav!');
    res.end();
  }
}).listen(port, () => console.log('server start at port 3000'));
