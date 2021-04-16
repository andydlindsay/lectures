const assert = require('assert').strict;
const { partition } = require('../q2');

describe('tests for q2', () => {

  it('can partition an array', () => {
    let actual = partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0);
    let expected = [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]];
    assert.deepEqual(actual, expected);
    
    actual = partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0);
    expected = [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]];
    assert.deepEqual(actual, expected);
  });

});
