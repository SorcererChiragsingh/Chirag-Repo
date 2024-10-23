// Leetcode:- https://leetcode.com/problems/filter-elements-from-array/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2634
// Filter Elements from Array Problem DSA
// Solution:- 

// JavaScript Problem

// Easy

// T.C = o(n)
// S.C = o(n)

/** 
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

/** 
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
*/


// Function that filters elements from the array based on the given function 'fn'
var filter = function(arr, fn) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) { // If the function 'fn' returns true, include the element
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr; // Return the filtered array
};

// Test cases

// Example function to filter even numbers
const isEven = function(val, idx) {
    return val % 2 === 0;
};

// Example function to filter values greater than their index
const greaterThanIndex = function(val, idx) {
    return val > idx;
};

// Testing filter with different functions
console.log(filter([1, 2, 3, 4], isEven));  // [2, 4]
console.log(filter([10, 5, 8, 3], greaterThanIndex));  // [10, 8]

// Additional test case: filter numbers greater than 5
console.log(filter([1, 7, 3, 9, 5], (val) => val > 5));  // [7, 9]
