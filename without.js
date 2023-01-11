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
    console.log("Assertation failed");
  } else {
    console.log("Assertation passed");
  }
};

const without = function(source, itemsToRemove) {
  const result = [...source];
  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (result[i] === itemsToRemove[j]) {
        result.splice(i, 1);
        i--;
      }
    }
  }
  return result;
};

// an easier way to do the "without" function

// const without = (source, itemsToRemove) => source.filter(item => !itemsToRemove.includes(item));

// // Define a function named "without" that takes in 2 arguments, "source" and "itemsToRemove"
// const without = (source, itemsToRemove) =>
//     // Use the filter method on the "source" array to keep only items that do not exist in the "itemsToRemove" array
//     source.filter(
//     // Define a callback function with one argument, "item"
//     item =>
//         // Use the "not" operator (!) to check if the "item" does not exist in the "itemsToRemove" array
//         // This will return a new array containing only the items from the "source" array that do not exist in the "itemsToRemove" array
//         !itemsToRemove.includes(item)
//     );


console.log(without([0, 1, 2, 3], [1])); // => [2, 3]
console.log(without([1, 1, 2, 3], [1]));
console.log(without([1, 2, 3, 1], [1]));
console.log(without([], []));
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
console.log(words);