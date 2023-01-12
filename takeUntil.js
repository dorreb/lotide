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


const takeUntil = function(array, callback) {
  let results = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

const beforeNeg = [1, 2, 5, 7, 2];
assertArraysEqual(results1, beforeNeg);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const beforePunc = ["I've", "been", "to", "Hollywood"];
assertArraysEqual(results2, beforePunc);





// code before refactoring with arrow syntax, keeping for my reference
// const results1 = takeUntil(data1, function(x) {
//   return x < 0;
// });
// console.log(results1);