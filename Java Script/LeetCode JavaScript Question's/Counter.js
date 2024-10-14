// Leetcode:- https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2620
// Counter Problem DSA
// Solution:- 

// JavaScript Problem

// Easy

// T.C = o(n)
// S.C = o(n)

// Given an integer n, return a counter function. 
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

/** 
Example 1:

Input:- 
n = 10 
["call","call","call"]

Output:- [10,11,12]

Explanation:- 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
*/

// Function that returns a counter function starting from 'n'
var createCounter = function(n) 
{
    
    return function() 
    {
        return n++
    };
};
// Create a counter starting from 10
const counter = createCounter(10);

// Call the counter function and log the results to the console
console.log(counter());  // Output: 10
console.log(counter());  // Output: 11
console.log(counter());  // Output: 12
