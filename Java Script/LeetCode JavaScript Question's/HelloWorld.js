// Leetcode:- https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2667
// Create Hello World Function Problem DSA
// Solution:- 

// JavaScript Problem

// Easy

// T.C = o(n)
// S.C = o(n)

// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

/** 
Example 1:

Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
*/

// Function that returns another function
var createHelloWorld = function() 
{
    return function() 
    {
        return "Hello World";
    };
};

// Create the function and store it in 'f'
const f = createHelloWorld();

// Execute the function 'f' and log the result to the console
console.log(f());  // Output: "Hello World"
