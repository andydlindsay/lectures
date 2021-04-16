const assert = require('assert').strict;
const { deepArrayToObject } = require('../q3');

describe('tests for q3', () => {

  it('can convert nested arrays to an object', () => {
    let actual = deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]]);
    let expected = { a: 1, b: 2, c: { d: 4 } };
    assert.deepEqual(actual, expected);
    
    actual = deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]]);
    expected = { a: 1, b: 2, c: { d: { e: 5, f: 6 } } };
    assert.deepEqual(actual, expected);
  });

});
