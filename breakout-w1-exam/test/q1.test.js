const { assert } = require('chai');
const lib = require("../q1.js");

describe('q1 tests', () => {

  describe("min", () => {

    it("min([6,1,7,2,8]) === 1", () => {
      assert.strictEqual(lib.min([6,1,7,2,8]), 1);
    });

    it("min([-9,-2,-4]) === -9", () => {
      assert.strictEqual(lib.min([-9,-2,-4]), -9);
    });

    it("min([5]) === 5", () => {
      assert.strictEqual(lib.min([5]), 5);
    });

  });

  describe("max", () => {

    it("max([5,2,7,100,2]) === 100", () => {
      assert.strictEqual(lib.max([5,2,7,100,2]), 100);
    });

    it("max([-1,-2,-3]) === -1", () => {
      assert.strictEqual(lib.max([-1,-2,-3]), -1);
    });

    it("max([5]) === 5", () => {
      assert.strictEqual(lib.max([5]), 5);
    });

  });

  describe("range", () => {

    it("range([8,3,1,8,3]) === 7", () => {
      assert.strictEqual(lib.range([8,3,1,8,3]), 7);
    });

    it("range([-5,0,5]) === 10", () => {
      assert.strictEqual(lib.range([-5,0,5]), 10);
    });

  });

});