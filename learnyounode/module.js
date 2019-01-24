const path = require('path');
const fs = require('fs');

const filterExt = (list, ext) => list.filter(element => path.extname(element) === '.' +ext);

const fileFilter =  (filePath, ext, callback) => {
  fs.readdir(filePath, (err, list) => {
    if (err) {
      return callback(err);
    }
    callback(null, filterExt(list, ext)); // null is for error
  });
};
module.exports = { fileFilter, filterExt };
