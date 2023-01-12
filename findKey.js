const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅" + ` Assertion Passed: ${actual}  === ${expected}.`);
  } else if (actual !== expected) {
    console.log("🛑🛑🛑" + ` Assertion Failed: ${actual} !== ${expected}.`);
  }
};



const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const space = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const results1 = findKey(space, x => x.stars === 6);
console.log(results1);

const firstFound = "noma";
assertEqual(results1, firstFound);
