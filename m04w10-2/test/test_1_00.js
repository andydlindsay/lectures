const chai    = require("chai");
const assert  = chai.assert;

const lib = require("../test-1/00.js");

describe.skip("count", () => {

  it("count([1,2,3,4,5]) === 5", () => {
    assert.equal(lib.count([1,2,3,4,5]), 5);
  });

  it("count([999]) === 1", () => {
    assert.equal(lib.count([999]), 1);
  });

  it("count([]) === 0", () => {
    assert.equal(lib.count([]), 0);
  });
});

describe.skip("sum", () => {

  it("sum([1,2,3,4,5]) === 15", () => {
    assert.equal(lib.sum([1,2,3,4,5]), 15);
  });

  it("sum([999]) === 999", () => {
    assert.equal(lib.sum([999]), 999);
  });

  it("sum([]) === 0", () => {
    assert.equal(lib.sum([]), 0);
  });
});

describe.skip("mean", () => {

  it("mean([1,2,3,4,5]) === 3", () => {
    assert.equal(lib.mean([1,2,3,4,5]), 3);
  });

  it("mean([1,10]) === 5.5", () => {
    assert.equal(lib.mean([1,10]), 5.5);
  });

  it("mean([5]) === 5", () => {
    assert.equal(lib.mean([5]), 5);
  });

  it("mean([]) === null", () => {
    assert.equal(lib.mean([]), null);
  });
});
