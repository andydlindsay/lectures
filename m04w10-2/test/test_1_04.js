const chai    = require("chai");
const assert  = chai.assert;

const lib = require("../test-1/04.js");

describe.skip("stdev", () => {

  it("stdev([2,4,4,4,5,5,7,9]) === 2", () => {
    assert.equal(lib.stdev([2,4,4,4,5,5,7,9]), 2);
  });

  it("stdev([-2,6,8,2,9]) === 4.08", () => {
    assert.equal(lib.stdev([-2,6,8,2,9]), 4.08);
  });

  it("stdev([2,2,5]) === 1.41", () => {
    assert.equal(lib.stdev([2,2,5]), 1.41);
  });

  it("stdev([5,5,0,0,0]) === 2.45", () => {
    assert.equal(lib.stdev([5,5,0,0,0]), 2.45);
  });

});
