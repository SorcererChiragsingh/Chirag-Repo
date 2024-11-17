// Leetcode:- https://leetcode.com/problems/array-prototype-last/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2619
// Array Prototype Last Problem DSA
// Solution:- 

// https://leetcode.com/problems/array-prototype-last/solutions/4693549/1st-leetcode-exercise (43ms) (Beats 89.79%)
// JavaScript Problem
// Easy

// T.C = o(1)
// S.C = o(1)

/** 
- Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. 
If there are no elements in the array, it should return -1.
- You may assume the array is the output of JSON.parse.

*/

/** 
Input: nums = [null, {}, 3]
Output: 3
Explanation: Calling nums.last() should return the last element: 3.
*/

_________________________________________________________________________

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length === 0){
        return -1
    }else{
        return this[this.length - 1]
    }
};

const arr = JSON.parse('[null, {}, 3]')
console.log(arr.last())

const arr2 = JSON.parse('[]')
console.log(arr2.last())


/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */