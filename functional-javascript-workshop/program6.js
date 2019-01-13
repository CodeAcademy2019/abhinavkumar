function countWords(inputWords) {
    // SOLUTION GOES HERE

    return fruitCount = inputWords.reduce(function(count,fruit){
         count[fruit] = count[fruit] + 1 || 1;
         return count;
    },{});

  }

  module.exports = countWords