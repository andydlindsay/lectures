const assert = require('assert').strict;
const {minmax} = require('../q4');

describe('tests for q4', () => {

  it('can successfully calculate the min and max value', () => {
    const data = [
      [[1, 2, 3, 4, 5], [1, 5]],
      [[90, 89, 123, 3], [3, 123]],
      [["apple", "banana", "canada"], ["apple", "canada"]]
    ];

    for (const [args, expected] of data) {
      const actual = minmax(args);

      assert.deepEqual(actual, expected);
    }
  });

  it('returns [undefined, undefined] when given an empty array', () => {
    const actual = minmax([]);
    const expected = [undefined, undefined];

    assert.deepEqual(actual, expected);
  });

});
