/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  const nums = {};
  for (const el of arr) {
    if (nums[el]) {
      nums[el] += 1;
    } else {
      nums[el] = 1;
    }
  }
  let most = -Infinity;
  let modeNum = null;
  for (const key in nums) {
    if (nums[key] > most) {
      most = nums[key];
      modeNum = key;
    }
  }
  return modeNum;
};

// Don't change below:
module.exports = { mode };
