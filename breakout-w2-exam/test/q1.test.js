const assert = require('assert').strict;
const {keyMatcher} = require('../q1');

describe('tests for q1', () => {

  it('compares matching keys successfully', () => {
    const actual = keyMatcher({a: 1, b: 2, c: 3}, {here: 3, is: 2, a: 1, silly: 0, example: -1}, 'a');
    const expected = true;

    assert.equal(actual, expected);
  });

  it('compares non-matching keys successfully', () => {
    const actual = keyMatcher({apple: "red", banana: "yellow", cherry: "red"}, {apple: "green", banana: "brown", cherry: "black"}, "apple");
    const expected = false;

    assert.equal(actual, expected);
  });

  it('compares non-matching key data types successfully', () => {
    const actual = keyMatcher({a: 1, b: 2, c: 3}, {a: "1", b: "2", c: "3"}, 'c');
    const expected = false;

    assert.equal(actual, expected);
  });
  
  it('compares non-existing key successfully', () => {
    const actual = keyMatcher({a: 1, b: 2, c: 3}, {d: 4, e: 5, f: 6}, 'b');
    const expected = false;

    assert.equal(actual, expected);
  });

});
