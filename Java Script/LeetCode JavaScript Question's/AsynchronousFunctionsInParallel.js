// Leetcode:- https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2721
// Execute Asynchronous Functions in Parallel Problem DSA
// Solution:- 

// https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solutions/3888598/promises-are-confusing-i-wrote-some-notes-down-for-you (70ms) (Beats 68.21%)
// JavaScript Problem
// Medium

// T.C = o()
// S.C = o()

/** 
- Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. 
All the promises should be executed in parallel.
- promise resolves:

When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. 
The promise should resolve when all the asynchronous functions in the array have completed execution in parallel. 
- promise rejects:

When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
Please solve it without using the built-in Promise.all function. 
*/

/** 
Input: functions = [
  () => new Promise(resolve => setTimeout(() => resolve(5), 200))
]
Output: {"t": 200, "resolved": [5]}
Explanation: 
promiseAll(functions).then(console.log); // [5]

The single function was resolved at 200ms with a value of 5.

*/

_________________________________________________________________________

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    return new Promise((resolve, reject) => {
        // We know the resulting array will be the same length as functions
        const results = new Array(functions.length);
        let count = 0;
        functions.forEach((fn, i) => {
            fn()
            .then(val => {
                results[i] = val;
                count++;
                if(count === functions.length) resolve(results);
            })
            .catch(reason => reject(reason));
        });
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
