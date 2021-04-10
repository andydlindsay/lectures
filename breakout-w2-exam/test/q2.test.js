const assert = require('assert').strict;
const {countWhich} = require('../q2');

describe('tests for q2', () => {

  it('can count successfully', () => {
    let actual = countWhich([1, 2, 3, 4, 5], function(num) { return (num > 4); });
    let expected = 1;

    assert.equal(actual, expected);

    actual = countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit[0] === "a"; });
    expected = 1;

    assert.equal(actual, expected);

    actual = countWhich([10, 20, 30, 40, 50], function(num) { return num % 7 === 0; });
    expected = 0;

    assert.equal(actual, expected);

    actual = countWhich(["apple", "banana", "cherry"], function(fruit) { return fruit.length > 5; });
    expected = 2;

    assert.equal(actual, expected);

    actual = countWhich([], function(x) { return x > 10 });
    expected = 0;

    assert.equal(actual, expected);
  });

  it('returns false when the first arg is not an array', () => {
    const actual = countWhich("This should fail", function(word) { return true; });
    const expected = false;

    assert.equal(actual, expected);
  });

});
