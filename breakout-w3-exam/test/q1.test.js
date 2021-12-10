const { assert } = require('chai');
const { arrayToObject } = require('../q1.js');

describe("arrayToObject", () => {
  it("converts an empty array to an empty object", () => {
    assert.deepEqual(arrayToObject([]), {});
  });

  it("tends to return an object", () => {
    const input = [["name", "Jon"]];
    const result = arrayToObject(input);
    assert.isNotArray(result);
    assert.isObject(result);
  });

  it("converts a single sub-array to a key value pair", () => {
    const input = [["name", "Jon"]];
    assert.deepEqual(arrayToObject(input), { name: "Jon" });
  });

  it("converts multiple sub-arrays into a single object", () => {
    const input = [["name", "Jon"], ["lastName", "Snow"], ["pet", "Ghost"]];
    const expected = {
      name: "Jon",
      lastName: "Snow",
      pet: "Ghost"
    };
    assert.deepEqual(arrayToObject(input), expected);
  });
});
