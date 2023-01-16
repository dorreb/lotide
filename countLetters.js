const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅" + ` Assertion Passed: ${actual}  === ${expected}.`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑" + ` Assertion Failed: ${actual} !== ${expected}.`);
  }
};

const countLetters = function(string) {
  const lowerCaseString = string.toLowerCase();

  let results = {};
  for (let letter of lowerCaseString) {
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter]++;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};
console.log(countLetters("Hello world"));

module.exports = countLetters;

