const eqArrays = function(first, second) {
  if (first.length === 0 && second.length === 0) {
    return true;
  }
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
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  }
};

const middle = function(array) {
  let resultArray = [];
  let midIndex = array.length / 2;
  if (array.length <= 2) {
    return resultArray;
  }
  if (array.length % 2 === 0) {
    resultArray.push(array[midIndex - 1], array[midIndex]);
    return resultArray;
  } else {
    resultArray.push(array[Math.floor(midIndex)]);
    return resultArray;
  }
};

//TEST CODE
assertArraysEqual(middle([1,]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);