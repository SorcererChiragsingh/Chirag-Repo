// Leetcode:- https://leetcode.com/problems/chunk-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2677
// Chunk Array Problem DSA
// Solution:- 

// https://leetcode.com/problems/chunk-array/solutions/3519210/multiple-approaches-slice-from-chunked-array-full-explanation (53ms) (Beats 71.96%)
// JavaScript Problem
// Easy

// T.C = o()
// S.C = o()

/** 
- Given an array arr and a chunk size size, return a chunked array.
- A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.
- You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
- Please solve it without using lodash's _.chunk function.
*/

/** 
Input: arr = [1,2,3,4,5], size = 1
Output: [[1],[2],[3],[4],[5]]
Explanation: The arr has been split into subarrays each with 1 element.
*/

_________________________________________________________________________

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
const chunk = (arr, size) => 
    {
    const chunkedArray = [];
  
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
  
    return chunkedArray;
  };
  
