const filterFiles = require('./module');

const dir = process.argv[2];
const filter = process.argv[3];

const callback = (err, list) => {
  if (err) {
    console.log(err);
  }
  list.forEach((element) => {
    console.log(element);
  });
};

filterFiles(dir, filter, callback);

module.exports = callback;
