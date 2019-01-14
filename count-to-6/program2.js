/*
var name = process.argv[2];
var lowerName = name.toLowerCase();
console.log(`Hello, ${name}!\nYour name lowercased is "${lowerName}".`)

*/

function prg2(name){
    var lowerName = name.toLowerCase();
    var sol = `Hello, ${name}!\nYour name lowercased is "${lowerName}".`
    console.log(sol);
    return sol;
}

//prg2(process.argv[2]);

module.exports = prg2;
