const eqArrays = function(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log("🛑🛑🛑" + "Assertation failed");
  } else {
    console.log("✅✅✅" + "Assertation passed");
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length);
const results3 = map(words, word => word.toUpperCase());
const results4 = map(words, (word) => word + word);
const results5 = map(words, (word) => word[0] + word[word.length - 1]);


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);
assertArraysEqual(results3, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
assertArraysEqual(results4, [
  "groundground",
  "controlcontrol",
  "toto",
  "majormajor",
  "tomtom",
]);
assertArraysEqual(results5, ["gd", "cl", "to", "mr", "tm"]);












// results1 function without arrow syntax for my reference

// const results1 = map(words, function(word) {
//   return word[0];
// });
// console.log(results1);