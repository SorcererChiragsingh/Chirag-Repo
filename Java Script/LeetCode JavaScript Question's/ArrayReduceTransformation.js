// Leetcode:- https://leetcode.com/problems/array-reduce-transformation/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2626
// Array Reduce Transformation Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/

/** 
Input: 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
Output: 10
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
*/

// Function that reduces an array to a single value using the provided function 'fn' and initial value 'init'
var reduce = function(nums, fn, init) {
    let val = init;  // Initialize the accumulator with 'init'
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);  // Apply the function 'fn' on the accumulator and the current value
    }
    return val;  // Return the final result
};

// Test cases

// Example function to sum numbers
const sum = (acc, curr) => acc + curr;

// Example function to find the product of numbers
const product = (acc, curr) => acc * curr;

// Example function to find the minimum value in the array
const minVal = (acc, curr) => Math.min(acc, curr);

// Testing reduce with different functions
console.log(reduce([1, 2, 3, 4], sum, 0));      // 10
console.log(reduce([1, 2, 3, 4], product, 1));  // 24
console.log(reduce([5, 1, 8, 3], minVal, Infinity));  // 1

// Additional test case: reducing an empty array with an initial value of 100
console.log(reduce([], sum, 100));  // 100
