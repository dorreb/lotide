// const assertArraysEqual = require('./assertArraysEqual');
// const eqArrays = require('./eqArrays');

const flatten = function(array) {
  //create new array to hold flattened elements
  let newArray = [];
  //iterate over the array
  for (let i = 0; i < array.length; i++) {
    // if current element is an array, loop over its elements and push them to flattened array
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        newArray.push(array[i][j]);
      }
    } else {
      // if element is not an array, push element to the array
      newArray.push(array[i]);
    }
  }
  return newArray;

};
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]