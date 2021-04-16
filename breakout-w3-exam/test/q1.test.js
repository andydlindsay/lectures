const assert = require('assert').strict;
const { arrayToObject } = require('../q1');

describe('tests for q1', () => {

  it('can convert an array to an object', () => {
    let actual = arrayToObject([['a', 1], ['b', 2], ['c', 3]]);
    let expected = { a: 1, b: 2, c: 3 };
    assert.deepEqual(actual, expected);
    
    actual = arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]);
    expected = {name: 'Dave', role: 'Instructor', yearsOfExperience: 10};
    assert.deepEqual(actual, expected);
  });

});
