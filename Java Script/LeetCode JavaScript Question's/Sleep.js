// Leetcode:- https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2621
// Sleep Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
- Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
*/

/** 
Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
*/

_________________________________________________________________________

// Method : Javascript solution using error handling and async/await:

/**
 * @param {number} millis
 */
async function sleep(millis) {
    return new Promise((delayresolve, reject) => {
      if (typeof millis !== 'number' || isNaN(millis)) {
        reject(new Error('Invalid argument. Expected a number.'));
      } else {
        setTimeout(delayresolve, millis);
      }
    });
  }
  /** 
   * let t = Date.now()
   * sleep(100).then(() => console.log(Date.now() - t)) // 100
   */
_________________________________________________________________________

/**

// Function that returns a promise that resolves after a delay
async function sleep(millis) {
  return new Promise((delayresolve, reject) => {
    if (typeof millis !== 'number' || isNaN(millis)) {
      reject(new Error('Invalid argument. Expected a number.'));
    } else {
      setTimeout(delayresolve, millis); // Resolve after specified delay
    }
  });
}

// Example usage
let t = Date.now();
sleep(100).then(() => console.log(Date.now() - t)); // Expected output: ~100

// Additional test cases
sleep(200).then(() => console.log("Slept for ~200 ms"));
sleep(500).then(() => console.log("Slept for ~500 ms"));

// Test case with invalid input
sleep("invalid").catch(err => console.error(err.message)); // Expected output: "Invalid argument. Expected a number."

*/