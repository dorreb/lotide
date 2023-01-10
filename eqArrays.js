const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅" + ` Assertion Passed: ${actual}  === ${expected}.`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑" + ` Assertion Failed: ${actual} !== ${expected}.`);
  }
};

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
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);