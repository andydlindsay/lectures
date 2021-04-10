const assert = require('assert').strict;
const {tempConverter} = require('../q0');

describe('tests for q0', () => {

  it('returns 89.6 when converting to F', () => {
    const actual = tempConverter(32, true);
    const expected = 89.6;

    assert.equal(actual, expected);
  });

  it('returns 0.0 when converting to C', () => {
    const actual = tempConverter(32, false);
    const expected = 0.0;

    assert.equal(actual, expected);
  });

  it('returns 37 when converting to C', () => {
    const actual = tempConverter(98.6, false);
    const expected = 37;

    assert.equal(actual, expected);
  });

  it('returns NaN if not given a value', () => {
    const actual = tempConverter("12", true);
    const expected = NaN;

    assert.equal(actual, expected);
  });

});
