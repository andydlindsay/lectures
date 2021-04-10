const assert = require('assert').strict;
const {range} = require('../q3');

describe('tests for q3', () => {

  it('can return a range successfully', () => {
    const data = [
      [[10, false, false], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
      [[0, false, false], [0]],
      [[10], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]],
      [[10, true], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]]
    ];

    for (const [args, expected] of data) {
      const result = range(...args);
      
      assert.deepEqual(result, expected);
    }
  });

  it('can skip zero', () => {
    const data = [
      [[10, true, false], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      [[3, true, false], [1, 2, 3]],
    ];

    for (const [args, expected] of data) {
      const result = range(...args);
      
      assert.deepEqual(result, expected);
    }
  });

  it('can return a descending range', () => {
    const data = [
      [[10, true, true], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]],
      [[10, false, true], [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
    ];

    for (const [args, expected] of data) {
      const result = range(...args);
      
      assert.deepEqual(result, expected);
    }
  });

  it('returns an empty array if the first arg is not a number', () => {
    const actual = range('2');
    const expected = [];

    assert.deepEqual(actual, expected);
  });

});
