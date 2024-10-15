// Leetcode:- https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2704
// To Be Or Not To Be Problem DSA
// Solution:- 

// JavaScript Problem

// Easy

// T.C = o(n)
// S.C = o(n)

// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

/** 
Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
*/

// Function to handle 'expect' functionality
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};

// Test cases
try {
    console.log(expect(5).toBe(5));  // true
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).toBe(4));  // throws "Not Equal"
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).notToBe(4));  // true
} catch (error) {
    console.error(error.message);
}

try {
    console.log(expect(5).notToBe(5));  // throws "Equal"
} catch (error) {
    console.error(error.message);
}
