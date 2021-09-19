const { assert } = require('chai');
const lib = require("../q3.js");

describe('q3 tests', () => {

  describe("mode", () => {

    it("mode([1,5,2,6,3,5]) === 5", () => {
      assert.strictEqual(lib.mode([1,5,2,6,3,5]), 5);
    });

    it("mode([0,1,5,2,6,2,5,0,0]) === 0", () => {
      assert.strictEqual(lib.mode([0,1,5,2,6,2,5,0,0]), 0);
    });

  });

});