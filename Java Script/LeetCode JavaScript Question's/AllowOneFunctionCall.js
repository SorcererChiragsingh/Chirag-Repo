// Leetcode:- https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2666
// Allow One Function Call Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
- Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
- The first time the returned function is called, it should return the same result as fn.
- Every subsequent time it is called, it should return undefined.
*/

/** 
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]
Explanation:
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
*/

_________________________________________________________________________

/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let a = 0;
	return function(...args){
        a++;
        if(a === 1){
            return fn(...args)
        }
    }
};
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */


_________________________________________________________________________

/** 
// Function that wraps another function to ensure it can only be called once
var once = function(fn) {
    let called = false;  // Tracks whether the function has been called
    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);  // Call the function only the first time
        }
    };
};

// Example function to be used with 'once'
let sum = (a, b, c) => a + b + c;

// Create a 'once' version of the sum function
let onceSum = once(sum);

// Test cases
console.log(onceSum(1, 2, 3));  // 6
console.log(onceSum(2, 3, 6));  // undefined (does not call sum again)

// Additional test case
let greet = (name) => `Hello, ${name}!`;
let onceGreet = once(greet);

console.log(onceGreet("Alice"));  // "Hello, Alice!"
console.log(onceGreet("Bob"));    // undefined (does not call greet again)
*/