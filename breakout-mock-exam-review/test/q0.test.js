const { assert } = require('chai');
const { sum, count, mean } = require('../q0');

describe('q0 tests', () => {

  describe('tests for count function', () => {
    
    it('can count the numbers in an array', () => {
      let input = [1, 2, 3, 4];
      let result = count(input);
      assert.equal(result, 4);

      input = [1, 2];
      result = count(input);
      assert.equal(result, 2);

      input = [];
      result = count(input);
      assert.equal(result, 0);
    });

  });

  describe('tests for sum function', () => {
    
    it('can add the numbers in an array', () => {
      let input = [6,2,3,4,9,6,1,0,5];
      let result = sum(input);
      assert.equal(result, 36);

      input = [2, 3, 4];
      result = sum(input);
      assert.equal(result, 9);

      input = [-2, -3, -4];
      result = sum(input);
      assert.equal(result, -9);
    });

  });

  describe('tests for mean function', () => {

    it('can calculate the mean of an array', () => {
      const input = [6,2,3,4,9,6,1,0,5];
      const actual = mean(input);
      const expected = 4;
      assert.equal(actual, expected);
    });

    it('returns null when given an empty array', () => {
      const input = [];
      const actual = mean(input);
      const expected = null;
      assert.equal(actual, expected);
    });

  });

});
