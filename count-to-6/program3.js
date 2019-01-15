var  prg3 = (inputs) => {

var result = inputs.map(input=>input[0]).reduce((firstCharacters,firstCharacter)=>firstCharacters+firstCharacter);

console.log(`[${inputs}] becomes "${result}"`);
return `${inputs} becomes "${result}"`;

}

//prg3(process.argv.slice(2));
module.exports = prg3;