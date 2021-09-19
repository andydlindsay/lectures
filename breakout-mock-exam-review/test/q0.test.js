const { assert } = require('chai');
const lib = require("../q0.js");

describe('q0 tests', () => {

  describe("count", () => {

    it("count([1,2,3,4,5]) === 5", () => {
      assert.strictEqual(lib.count([1,2,3,4,5]), 5);
    });

    it("count([999]) === 1", () => {
      assert.strictEqual(lib.count([999]), 1);
    });

    it("count([]) === 0", () => {
      assert.strictEqual(lib.count([]), 0);
    });
  });

  describe("sum", () => {

    it("sum([1,2,3,4,5]) === 15", () => {
      assert.strictEqual(lib.sum([1,2,3,4,5]), 15);
    });

    it("sum([999]) === 999", () => {
      assert.strictEqual(lib.sum([999]), 999);
    });

    it("sum([]) === 0", () => {
      assert.strictEqual(lib.sum([]), 0);
    });
  });

  describe("mean", () => {

    it("mean([1,2,3,4,5]) === 3", () => {
      assert.strictEqual(lib.mean([1,2,3,4,5]), 3);
    });

    it("mean([1,10]) === 5.5", () => {
      assert.strictEqual(lib.mean([1,10]), 5.5);
    });

    it("mean([5]) === 5", () => {
      assert.strictEqual(lib.mean([5]), 5);
    });

    it("mean([]) === null", () => {
      assert.strictEqual(lib.mean([]), null);
    });
  });

});
