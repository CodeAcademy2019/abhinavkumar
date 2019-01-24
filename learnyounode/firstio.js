const filePath = process.argv[2];
const fs = require('fs');

function countNewLines(path) {
  // console.log(filePath);
  const buf = fs.readFileSync(path);

  const str = buf.toString();

  const numOfLines = str.split('\n');
  console.log(numOfLines.length - 1);
  return numOfLines.length - 1;
}

countNewLines(filePath);

module.exports = countNewLines;
