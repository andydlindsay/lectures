const { assert } = require('chai');
const { median } = require('../q2');

describe('q2 tests', () => {

  describe('tests for median function', () => {

    it('can calculate the median value of an array', () => {
      let input = [6,2,3,4,9,6,1,0,5];
      let result = median(input);
      assert.equal(result, 4);

      input = [6,2,3,4,9,6,1,0,5,7];
      result = median(input);
      assert.equal(result, 4.5);
    });

  });

});