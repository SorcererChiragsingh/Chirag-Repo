// Leetcode:- https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2703
// Return Length of Arguments Passed Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
- Write a function argumentsLength that returns the count of arguments passed to it.
*/

/** 
Input: args = [5]
Output: 1
Explanation:
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
*/

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
    let count = 0;
    while (args[count++] !== undefined) {}
    return count-1;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

/**
// Function to count the number of arguments passed
var argumentsLength = function(...args) {
    let count = 0;
    while (args[count++] !== undefined) {}
    return count - 1;
};

// Test cases
console.log(argumentsLength(1, 2, 3));           // 3
console.log(argumentsLength('a', 'b', 'c', 'd')); // 4
console.log(argumentsLength(true, false));        // 2
console.log(argumentsLength(null, [1, 2], { key: 'value' }, 42)); // 4

// Additional test case: no arguments
console.log(argumentsLength()); // 0

*/