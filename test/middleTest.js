const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST CODE
assertArraysEqual(middle([1,]), []); // True
assertArraysEqual(middle([1, 2]), []); // True
assertArraysEqual(middle([1, 2, 3]), [2]); //True
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //True
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // True
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // True
assertArraysEqual(middle([8, 9, 10, 11, 12]), [9]); // False
