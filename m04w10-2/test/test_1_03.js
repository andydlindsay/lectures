const chai    = require("chai");
const assert  = chai.assert;

const lib = require("../test-1/03.js");

describe.skip("mode", () => {

  it("mode([1,5,2,6,3,5]) === 5", () => {
    assert.equal(lib.mode([1,5,2,6,3,5]), 5);
  });

  it("mode([0,1,5,2,6,2,5,0,0]) === 0", () => {
    assert.equal(lib.mode([0,1,5,2,6,2,5,0,0]), 0);
  });

});
