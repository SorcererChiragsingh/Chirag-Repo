// Leetcode:- https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2629
// Function Composition Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
- Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
- The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
- The function composition of an empty list of functions is the identity function f(x) = x.
- You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

/** 
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
       let ans =  x;
      for(let i=functions.length-1;i>=0;i--){
          ans = functions[i](ans)
      }
      return ans
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/*
// Function that composes an array of functions and returns a new function applying them right to left
var compose = function(functions) {
    return function(x) {
        let ans = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            ans = functions[i](ans);  // Apply each function in reverse order
        }
        return ans;
    }
};

// Test cases

// Example with increment and double functions
const increment = x => x + 1;
const double = x => 2 * x;
const fn1 = compose([increment, double]);
console.log(fn1(4));  // 9, since double(4) => 8 and then increment(8) => 9

// Example with multiple functions
const square = x => x * x;
const half = x => x / 2;
const fn2 = compose([increment, square, half]);
console.log(fn2(4));  // 9, since half(4) => 2, then square(2) => 4, and increment(4) => 5

// Additional test case: applying no functions should return the input
const fn3 = compose([]);
console.log(fn3(10));  // 10
*/