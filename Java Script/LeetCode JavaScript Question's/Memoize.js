// Leetcode:- https://leetcode.com/problems/memoize/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2623
// Memoize Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
- Given a function fn, return a memoized version of that function.
- A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
- You can assume there are 3 possible input functions: sum, fib, and factorial.

- sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
- fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
- factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
*/

/** 
Input:
fnName = "sum"
actions = ["call","call","getCallCount","call","getCallCount"]
values = [[2,2],[2,2],[],[1,2],[]]
Output: [4,4,1,3,2]
Explanation:
const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2
*/

_________________________________________________________________________

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    var map = new Map();
    return function (...args) {
        var tmpArg = JSON.stringify(args);
        if (!map.has(tmpArg)) {
            result = fn(...args);
            map.set(tmpArg, result);
            return result;
        } else {
            return map.get(tmpArg);
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
_________________________________________________________________________

/** 
// Function to memoize another function to cache results
function memoize(fn) {
    var map = new Map();
    return function (...args) {
        var tmpArg = JSON.stringify(args);
        if (!map.has(tmpArg)) {
            let result = fn(...args);  // Call the function if result not cached
            map.set(tmpArg, result);    // Cache the result
            return result;
        } else {
            return map.get(tmpArg);     // Return cached result if available
        }
    }
}

// Test cases

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
});

// Testing memoized function
console.log(memoizedFn(2, 3));  // 5
console.log(memoizedFn(2, 3));  // 5 (from cache)
console.log("Call count:", callCount);  // 1 (only called once)

// Additional test case
const memoizedMultiply = memoize(function (x, y) {
    return x * y;
});

console.log(memoizedMultiply(4, 5));  // 20
console.log(memoizedMultiply(4, 5));  // 20 (from cache)
console.log(memoizedMultiply(3, 5));  // 15

*/