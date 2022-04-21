const { assert } = require('chai');
const { allPlayerNames } = require('../00.js');

const dataset1 = [
  { winner: 'Alishah', loser: 'Bob',    loser_points: 3 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 1 },
  { winner: 'Elise',   loser: 'Bob',    loser_points: 2 },
  { winner: 'Elise',   loser: 'Maria',  loser_points: 4 },
  { winner: 'Alishah', loser: 'Maria',  loser_points: 2 },
  { winner: 'Maria',   loser: 'Xu Jin', loser_points: 3 },
  { winner: 'Xu Jin',  loser: 'Elise',  loser_points: 2 }
];

const dataset2 = [
  { winner: 'Charlie', loser: 'Bob',    loser_points: 3 },
  { winner: 'Dorie',   loser: 'Uncle',  loser_points: 1 },
  { winner: 'Sam',     loser: 'Bob',    loser_points: 2 },
  { winner: 'Sam',     loser: 'Dorie',  loser_points: 4 },
  { winner: 'Charlie', loser: 'Dorie',  loser_points: 2 },
  { winner: 'Dorie',   loser: 'Uncle',  loser_points: 3 },
  { winner: 'Uncle',   loser: 'Sam',    loser_points: 2 }
];

const dataset3 = [
  { winner: 'Charlie', loser: 'Charlie', loser_points: 3 }
];

describe("allPlayerNames", () => {
  it("returns an array", () => {
    const results = allPlayerNames([]);
    assert.isArray(results);
  });
  it("returns an empty array for an empty array input", () => {
    const results = allPlayerNames([]);
    assert.deepEqual(results, []);
  });
  it("works with the example dataset", () => {
    const results = allPlayerNames(dataset1);
    assert.deepEqual(results, ['Alishah', 'Bob', 'Maria', 'Xu Jin', 'Elise']);
  });
  it("works with a different dataset", () => {
    const results = allPlayerNames(dataset2);
    assert.deepEqual(results, ['Charlie', 'Bob', 'Dorie', 'Uncle', 'Sam']);
  });
  it("doesn't count the same person twice even if they are both the winner and loser (odd though it may be)", () => {
    const results = allPlayerNames(dataset3);
    assert.deepEqual(results, ['Charlie']);
  });
});
