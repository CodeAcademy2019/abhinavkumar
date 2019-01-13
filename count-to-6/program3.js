var inputs = process.argv.slice(2);

var result = inputs.map(input=>input[0]).reduce((firstCharacters,firstCharacter)=>firstCharacters+firstCharacter);

console.log(`[${inputs}] becomes "${result}"`);