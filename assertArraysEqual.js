const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log("🛑🛑🛑" + "Assertation failed");
  } else {
    console.log("✅✅✅" + "Assertation passed");
  }
};

module.exports = assertArraysEqual;
