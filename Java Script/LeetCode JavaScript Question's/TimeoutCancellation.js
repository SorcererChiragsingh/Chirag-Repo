// Leetcode:- https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2715
// Timeout Cancellation Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
- Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
- After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
- setTimeout(cancelFn, cancelTimeMs)
- Initially, the execution of the function fn should be delayed by t milliseconds.
- If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. 
Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.
*/

/** 
Input: fn = (x) => x * 5, args = [2], t = 20
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
*/

_________________________________________________________________________

/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    let timeoutId;
  
    const cancelFn = () =>  clearTimeout(timeoutId);
  
    timeoutId = setTimeout(() => fn(...args), t);
  
    return cancelFn;  
  };
  
  /**
   *  const result = []
   *
   *  const fn = (x) => x * 5
   *  const args = [2], t = 20, cancelT = 50
   *
   *  const log = (...argsArr) => {
   *      result.push(fn(...argsArr))
   *  }
   *       
   *  const cancel = cancellable(fn, args, t);
   *           
   *  setTimeout(() => {
   *     cancel()
   *     console.log(result) // [{"time":20,"returned":10}]
   *  }, cancelT)
   */
  
_________________________________________________________________________
/**

// Function that runs fn with a delay and returns a cancel function
var cancellable = function(fn, args, t) {
    let timeoutId;
  
    const cancelFn = () => clearTimeout(timeoutId);
  
    timeoutId = setTimeout(() => fn(...args), t);
  
    return cancelFn;  
  };
  
  // Test setup
  const result = [];
  
  const fn = (x) => x * 5;
  const args = [2];
  const t = 20;
  const cancelT = 50;
  
  const log = (...argsArr) => {
    result.push({ time: t, returned: fn(...argsArr) });
  };
  
  const cancel = cancellable(log, args, t);
  
  // Cancel the function after cancelT milliseconds and log the result
  setTimeout(() => {
    cancel();
    console.log(result); // Expected output: [{ time: 20, returned: 10 }]
  }, cancelT);
  
  */