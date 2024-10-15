// Leetcode:- https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2635
// Apply Transform Over Each Element in Array Problem DSA
// Solution:- 

// JavaScript Problem

// Easy

// T.C = o(n)
// S.C = o(n)

/** 
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.
*/

/** 
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one. 
*/

// Function that applies a given function 'fn' to each element of the array
var map = function(arr, fn) 
{
    for (let i = 0; i < arr.length; i++) 
        {
        arr[i] = fn(arr[i], i); // Apply the function to each element and its index
    }
    return arr; // Return the modified array
};

// Test cases
const arr1 = [1, 2, 3, 4];

// Example function to multiply each element by 2
const multiplyByTwo = function(val, idx) 
{
    return val * 2;
};

// Example function to add the index to the value
const addIndex = function(val, idx) 
{
    return val + idx;
};

// Testing map with different functions
console.log(map(arr1, multiplyByTwo)); // [2, 4, 6, 8]
console.log(map([1, 2, 3], addIndex)); // [1, 3, 5]

// Additional test case
console.log(map([5, 10, 15], (val) => val * val)); // [25, 100, 225] (square each element)
