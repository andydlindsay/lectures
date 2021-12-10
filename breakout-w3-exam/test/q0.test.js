const { assert } = require('chai');
const { objectToArray } = require('../q0.js');

describe("objectToArray", () => {
  it("converts an empty object to an empty array", () => {
    assert.deepEqual(objectToArray({}), []);
  });

  it("tends to return an array", () => {
    const input = { key: "value" };
    assert.isArray(objectToArray(input));
  });

  it("converts { key: 'value' } => [['key', 'value']]", () => {
    const input = { key: "value" };
    assert.deepEqual(objectToArray(input), [["key", "value"]]);
  });

  it("converts multiple key-value pairs to individual arrays", () => {
    const input = { name: "Jon", lastName: "Snow", pet: "Ghost" };
    assert.deepEqual(objectToArray(input), [
      ["name", "Jon"],
      ["lastName", "Snow"],
      ["pet", "Ghost"]
    ]);
  });
});
