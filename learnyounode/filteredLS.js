const dirPath = process.argv[2];
const extension = process.argv[3];
const fs = require('fs');

function filterFileName(list,ext) {
  const filteredList = list.filter((fileName) => {
    if (fileName.split('.')[1] === ext) return fileName;
  });
  return filteredList;
}

function printFilteredList(filtered) {
  filtered.forEach((file) => {
    console.log(file);
  });
}

function main(path, ext, callback) {
  fs.readdir(path, (err, list) => {
    if (err) console.log(err.message);
    const filtered = filterFileName(list, ext);
    callback(filtered);
  });
}

//main(dirPath, extension, printFilteredList);

module.exports = main;
