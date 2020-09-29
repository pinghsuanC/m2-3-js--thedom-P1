// Exercise 9
//
// Part 1 - Write
// ---------------
// Write a function that accepts a string of multiple words and returns the longest word in the string.

// - If the input string is empty then return an empty string.
// - If multiple words have the same length, return the last one.

// Example
//   longestWord("hey hello morning") returns "morning"

// HINTS:
//  - You'll need to use the split string method
//  - `forEach` might be helpful

function longestWord(str) {
  // Place solution here
  // check input
  if(typeof(str)!=="string"){
    return undefined;
  }
  //empty
  if(str==="" || str.length===1){
    return str;
  }
  //counting length! assuming that each words are seperated by only one space...
  let lar_word = "";
  let arr = str.split(" ");
  arr.forEach(element => {
    if(element.length>=lar_word.length){
      lar_word=element;  // reassign largest word if length is equal or larger (since if equal you want last one)
    }
  });
  return lar_word;
}

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = longestWord;
