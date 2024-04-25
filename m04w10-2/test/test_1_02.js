const chai    = require("chai");
const assert  = chai.assert;

const lib = require("../test-1/02.js");

describe.skip("median", () => {

  it("median([1,2,3]) === 2", () => {
    assert.equal(lib.median([1,2,3]), 2);
  });

  it("median([2,1,3]) === 2", () => {
    assert.equal(lib.median([2,1,3]), 2);
  });

  it("median([1,2,3,4]) === 2.5", () => {
    assert.equal(lib.median([1,2,3,4]), 2.5);
  });

  it("median([3,4,1,2]) === 2.5", () => {
    assert.equal(lib.median([4,3,2,1]), 2.5);
  });

});
