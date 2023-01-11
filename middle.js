const eqArrays = function(first, second) {
  if (first.length !== second.length){
    return false;
  }
  for (let i = 0; i < first.length; i++){
    if (first[i] !== second[i]){
      return false;
    } 
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2){
  if (eqArrays(arr1, arr2) === false){
    console.log("Assertation failed")
  } else {
    console.log("Assertation passed")
  }
};

const middle = function(array) {
  if(!array.length) {
    return [];
  } else if((array.length % 2 === 0)) {
    return [(array.length / 2), (array.length / 2 + 1)];
  } else {
    // divide the length by two
    // round the number down to the nearest integer
    return [array[Math.floor(array.length / 2)]];
  }
};
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(middle([1, 2, 3,])) // => [2]
