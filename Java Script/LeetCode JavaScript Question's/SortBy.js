// Leetcode:- https://leetcode.com/problems/sort-by/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2724
// Sort By Problem DSA
// Solution:- 

//   (ms) (Beats %)
// JavaScript Problem
// Easy

// T.C = o()
// S.C = o()

/** 
- Given an array arr and a function fn, return a sorted array sortedArr. 
You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.
- You may assume that fn will never duplicate numbers for a given array.

*/

/** 
Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
Output: [1, 2, 3, 4, 5]
Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
*/

_________________________________________________________________________

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) 
{
    return arr.sort((a, b) => fn(a) - fn(b));
};
