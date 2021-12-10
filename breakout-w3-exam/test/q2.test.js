const { assert } = require('chai');
const { partition } = require('../q2.js');

describe("partition", () => {
  it("returns an array", () => {
    const result = partition([0, 1, 2], n => n % 2 === 0);
    assert.isArray(result);
  });

  it("returns an array with two arrays", () => {
    const result = partition([0, 1, 2], n => n % 2 === 0);
    assert.lengthOf(result, 2);
    assert.isArray(result[0]);
    assert.isArray(result[1]);
  });

  it("returns two empty arrays for an empty input array", () => {
    const result = partition([], n => n % 2 === 0);
    assert.deepEqual(result, [[], []]);
  });

  it("splits an array of numbers based on if the value is even or odd", () => {
    const callback = function(n) {
      return n % 2 === 0;
    };
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const result = partition(input, callback);
    const leftArray = result[0];
    const rightArray = result[1];

  assert.deepEqual(leftArray, [2, 4, 6, 8, 10], "Left array doesn't match");
    assert.deepEqual(rightArray, [1, 3, 5, 7, 9], "Right array doesn't match");
  });

  it("splits an array of number based on if the value is positive or negative (0 is positive)", () => {
    const callback = function(n) {
      return n < 0;
    };
    const input = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

    const result = partition(input, callback);
    const leftArray = result[0];
    const rightArray = result[1];

    assert.deepEqual(leftArray, [-5, -4, -3, -2, -1], "Left array doesn't match");
    assert.deepEqual(rightArray, [0, 1, 2, 3, 4, 5], "Right array doesn't match");
  });
});
