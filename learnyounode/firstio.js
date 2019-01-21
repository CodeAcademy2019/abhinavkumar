 const filePath = process.argv[2];

function countNewLines(filePath) {

  var fs = require('fs');

  // console.log(filePath);

  let buf = fs.readFileSync(filePath);

  let str = buf.toString();

  let numOfLines = str.split('\n');
  console.log(numOfLines.length - 1);
  return numOfLines.length - 1;
} 

 countNewLines(filePath)

module.exports = countNewLines;