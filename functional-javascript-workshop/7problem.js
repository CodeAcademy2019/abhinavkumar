function reduce(arr, fn, initial) {
  // SOLUTION GOES HERE
  if (!arr.length) {
    return initial;
  }

  initial = fn(initial,arr[0],0,arr);

  return reduce(arr.slice(1),fn,initial);
}

module.exports = reduce;