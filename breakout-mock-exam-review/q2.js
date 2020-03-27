/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by median. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */

const median = function(arr) {
  const sorted = [...arr].sort();
  const middleIndex = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    const total = sorted[middleIndex] + sorted[middleIndex - 1];
    return round(total / 2);
  }
  return sorted[middleIndex];
};

// Don't change below:
module.exports = { median };
