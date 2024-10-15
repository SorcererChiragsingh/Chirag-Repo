// Leetcode:- https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
// Leet Code Question no. 2665
// Counter 2 Problem DSA
// Solution:- 

// JavaScript Problem

// Easy

// T.C = o(n)
// S.C = o(n)

/** 
Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
The three functions are:

increment() increases the current value by 1 and then returns it.
decrement() reduces the current value by 1 and then returns it.
reset() sets the current value to init and then returns it.
*/

/** 
Example 1:
Input: init = 5, calls = ["increment","reset","decrement"]
Output: [6,5,4]
Explanation:
const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
*/

// Function to create a counter with increment, decrement, and reset functionalities
var createCounter = function(init) 
{
    let count = init || 0; // Initialize count to 0 or given value

    const increment = function() 
    {
        count++;
        return count;
    };

    const decrement = function() 
    {
        count--;
        return count;
    };

    const reset = function() 
    {
        count = init || 0;
        return count;
    };

    return { increment, decrement, reset };
};

// Test cases
const counter = createCounter(5);

console.log(counter.increment()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4

// Additional test cases
const counter2 = createCounter(0); // Initializing with 0
console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.reset());     // 0
console.log(counter2.decrement()); // -1
