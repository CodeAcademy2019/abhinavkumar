const filePath = process.argv[2];
const fs = require('fs');

function callback(length) {
  console.log(length);
}


function countNumberOfLines(str) {
  const lines = str.split('\n');
  const numberOfLines = lines.length - 1;
  return numberOfLines;
}

function findNumberOfNewLines(path, callbackFunction) {

  fs.readFile(path, 'utf-8', (err, fileContent) => {
    if (err) console.log(err.message);
    const noOfLines = countNumberOfLines(fileContent);
    callbackFunction(noOfLines);
  });
}

//findNumberOfNewLines(filePath, callback);

module.exports = findNumberOfNewLines;
