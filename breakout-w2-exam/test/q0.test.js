const assert  = require("chai").assert;

const { tempConverter } = require("../q0");

describe('tempConverter', () => {
  it('should return a number, not a string', () => {
    let result = tempConverter(100, true);

    assert.ok(typeof result === "number");
  });

  it('converts to Fahrenheit correctly (42C => 107.6F)', () => {
    let result = tempConverter(42, true);

    assert.equal(result, 107.6);
  });

  it('converts to Celsius correctly (42F => 5.6C)', () => {
    let result = tempConverter(42, false);

    assert.equal(result, 5.6);
  });

  it('returns NaN if it is not given a number ("42" => NaN)', () => {
    let result = tempConverter("42", true);

    assert.notEqual(result, undefined);
    assert.ok(isNaN(result));
  });
});
