// const inputs = process.argv.slice(2);

function findSum(inputs) {
  if(inputs.length === 0){
    return 0;
  }
  let sum = 0;
  inputs.forEach(input => sum += Number(input) );
  // console.log(sum);
  return sum;
}

//findSum(inputs);
module.exports = findSum;