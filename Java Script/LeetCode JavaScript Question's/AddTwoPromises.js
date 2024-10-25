// Leetcode:- https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2723
// Add Two Promises Problem DSA
// Solution:- 

// JavaScript Problem
// Easy

// T.C = o(n)
// S.C = o(n)

/** 
- Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.
*/

/** 
Input: 
promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Explanation: The two input promises resolve with the values of 2 and 5 respectively. 
The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
*/

_________________________________________________________________________

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);
  
    // Return a new promise that resolves with the sum of the values
    return value1 + value2;
  };
  
  // // Example usage:
  // var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
  // var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
  
  // addTwoPromises(promise1, promise2)
  //   .then(console.log); // Output: 7
  
  /**
   * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
   *   .then(console.log); // 4
   */

_________________________________________________________________________

/**
// Function that adds values from two resolved promises
var addTwoPromises = async function(promise1, promise2) {
    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);
  
    // Return the sum of the resolved values
    return value1 + value2;
  };
  
  // Example usage
  var promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
  var promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));
  
  addTwoPromises(promise1, promise2).then(console.log); // Expected output: 7
  
  // Additional test case
  addTwoPromises(Promise.resolve(3), Promise.resolve(4)).then(console.log); // Expected output: 7
  addTwoPromises(Promise.resolve(10), Promise.resolve(15)).then(console.log); // Expected output: 25
  */