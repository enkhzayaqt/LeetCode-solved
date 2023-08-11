/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // base case
    if(n <= 1) return n;
    
    // recursive case
    return fib(n-1) + fib(n-2);
};