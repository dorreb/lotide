const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("#assertEqual", () => {
  it("returns true if 'Hello World' equals 'Hello World'", () => {
    assert.isTrue(assertEqual('Hello World', 'Hello World'), true);
  });
  it("returns false if 'Hello' does not equal 'Goodbye'", () => {
    assert.isFalse(assertEqual('Hello', 'Goodbye'), false);
  });

});