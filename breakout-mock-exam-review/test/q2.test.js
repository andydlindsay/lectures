const { assert } = require('chai');
const lib = require("../q2.js");

describe('q2 tests', () => {

  describe("median", () => {

    it("median([1,2,3]) === 2", () => {
      assert.strictEqual(lib.median([1,2,3]), 2);
    });

    it("median([2,1,3]) === 2", () => {
      assert.strictEqual(lib.median([2,1,3]), 2);
    });

    it("median([1,2,3,4]) === 2.5", () => {
      assert.strictEqual(lib.median([1,2,3,4]), 2.5);
    });

    it("median([3,4,1,2]) === 2.5", () => {
      assert.strictEqual(lib.median([4,3,2,1]), 2.5);
    });

  });

});