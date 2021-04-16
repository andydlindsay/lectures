const assert = require('assert').strict;
const { objectToArray } = require('../q0');

describe('tests for question 0', () => {

  it('can convert an object to an array', () => {
    let actual = objectToArray({ a: 1, b: 2, c: 3 });
    let expected = [['a', 1], ['b', 2], ['c', 3]];

    assert.deepEqual(actual, expected);
    
    actual = objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10});
    expected = [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]];
    
    assert.deepEqual(actual, expected);
  });

});
