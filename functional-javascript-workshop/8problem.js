function duckCount(...args) {
  // SOLUTION GOES HERE
  return args.filter((arg) => Object.prototype.hasOwnProperty.call(arg,'quack')).length;
}

module.exports = duckCount;

// function1.call(obj1 context,argument(s) of function1)
// So, function 1 will be called in context of the obj1 with the required arguments
