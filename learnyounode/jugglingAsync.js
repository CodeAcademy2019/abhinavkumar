const http = require('http');

// const url = [process.argv[2], process.argv[3], process.argv[4]];
const finalQueue = [];
let responseReceived = 0;

const callback = (responseArray) => {
  for (let i = 0; i < 3; i += 1) {
    console.log(responseArray[i]);
  }
};
const httpGetRequest = (urlAddress, indexOfResult, callbackF) => {
  // console.log(urlAddress);
  http.get(urlAddress, (response) => {
    let result = '';
    response.setEncoding('utf8');
    response.on('data', (data) => {
      result += data;
    });
    response.on('end', () => {
      finalQueue[indexOfResult] = result;
      responseReceived += 1;
      if (responseReceived === 3) {
        // print(finalQueue);
        callbackF(finalQueue);
      }
    });
  });
};
// for (let i = 0; i < 3; i += 1) {
//   httpGetRequest(url[i], i, callback);
// }

 module.exports = httpGetRequest;
