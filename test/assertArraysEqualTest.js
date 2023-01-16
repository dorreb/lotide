const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("#assertArraysEqual", () => {
  it("returns true if ['Hello World'] equals ['Hello World']", () => {
    assert.isTrue(assertArraysEqual(['Hello World'], ['Hello World']), true);
  });
  it("returns true if [5, 6, 7] equals [5, 6, 7]", () => {
    assert.isTrue(assertArraysEqual([5, 6, 7], [5, 6, 7]), true);
  });
  it("returns false if [8] does not equal [1, 2, 3]", () => {
    assert.isFalse(assertArraysEqual([8], [1, 2, 3]), false);
  });
});