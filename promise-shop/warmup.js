let timeOut = () => {
  setTimeout(() => {
    let msg = 'TIMED OUT!'
    console.log(msg);
  },300);
}
timeOut();
module.exports = timeOut;