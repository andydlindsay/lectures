const { assert } = require('chai');
const { deepArrayToObject } = require('../q3.js');

describe("deepArrayToObject", () => {
  describe("works like arrayToObject", () => {
    it("converts an empty array to an empty object", () => {
      assert.deepEqual(deepArrayToObject([]), {});
    });

    it("converts a single sub-array to a key value pair", () => {
      const input = [["name", "Jon"]];
      assert.deepEqual(deepArrayToObject(input), { name: "Jon" });
    });

    it("converts multiple sub-arrays into a single object", () => {
      const input = [["name", "Jon"], ["lastName", "Snow"], ["pet", "Ghost"]];

      assert.deepEqual(deepArrayToObject(input), {
        name: "Jon",
        lastName: "Snow",
        pet: "Ghost"
      });
    });
  });
  describe("can handle nested arrays", () => {
    it("converts [['a', 1], ['b', 2], ['c', [['d', 4]]]] => { a: 1, b: 2, c: { d: 4 } }", () => {
      const input = [
        ['a', 1],
        ['b', 2],
        ['c',
          [
            ['d', 4]
          ]
        ]
      ];
      const expected = {
        a: 1,
        b: 2,
        c: {
          d: 4
        }
      };
      assert.deepEqual(deepArrayToObject(input), expected);
    });

    it("converts [['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]] => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }", () => {
      const input = [
        ['a', 1],
        ['b', 2],
        ['c',
          [
            ['d',
              [
                ['e', 5],
                ['f', 6]
              ]
            ]
          ]
        ]
      ];
      const expected = {
        a: 1,
        b: 2,
        c: {
          d: {
            e: 5,
            f: 6
          }
        }
      };
      assert.deepEqual(deepArrayToObject(input), expected);
    });
  });
});
