const http = require('http');
// const concat = require('concat-stream');

// function callback(response) {
//   response.pipe(concat((data) => {  // pipe the response stream to concat stream
//     console.log(data.toString().length); // find the length of data
//     console.log(data.toString()); // convert buffer to string
//   }));
// }


// http.get(process.argv[2], callback);

const callback = (res) => {
  console.log(res.length);
  console.log(res);
};

const httpCollect = (callbackF) => {
  http.get('http://localhost:4000', (response) => {
    let result = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      callbackF(result);
    });
  });
};
httpCollect(callback);

module.exports = httpCollect;
