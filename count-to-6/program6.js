// let numbers = process.argv.slice(2);
// let minimum = Math.min(...numbers);

// console.log(`The minimum of [${numbers}] is ${minimum}`);


function prg6(numbers){
    minimum = Math.min (...numbers);
    var result = `The minimum of [${numbers}] is ${minimum}`;
    return result;
}

//prg6(process.argv.slice(2));


module.exports = prg6;