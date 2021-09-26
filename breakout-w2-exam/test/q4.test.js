const assert  = require("chai").assert;

const minmax = require("../q4").minmax;

describe('minmax', () => {
  it("[1, 100, 2, 200, 300, 3] => [1, 300]", () => {
    let result = minmax([1, 100, 2, 200, 300, 3]);

    assert.deepEqual(result, [1, 300]);
  });

  it("[9, -9, 10, -10] => [-10, 10]", () => {
    let result = minmax([9, -9, 10, -10]);

    assert.deepEqual(result, [-10, 10]);
  });

  it("[0] => [0, 0]", () => {
    let result = minmax([0]);

    assert.deepEqual(result, [0, 0]);
  });

  it("['macbook', 'laptop', 'chromebook'] => ['chromebook', 'macbook']", () => {
    let result = minmax(["macbook", "laptop", "chromebook"]);

    assert.deepEqual(result, ["chromebook", "macbook"]);
  });

  it("[] => [undefined, undefined]", () => {
    let result = minmax([]);

    assert.deepEqual(result, [undefined, undefined]);
  });
});
