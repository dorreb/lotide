const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns [1, 2, 3] for [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns [5, 4, 3, 2] for [5, 4, 3, 2]", () => {
    assert.strictEqual(eqArrays([5, 4, 3, 2], [5, 4, 3, 2]), true);
  });
});

