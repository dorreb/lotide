const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual([1, 2, 3], []); // false
assertArraysEqual([1, 2, 3, 4, 5, 6], [1, 2, 3]); // false
assertArraysEqual([8], [1, 2, 3]); // false
assertArraysEqual([1, 2, 3], ["Hello"]); //false