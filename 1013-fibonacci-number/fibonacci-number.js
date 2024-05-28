/**
 * @param {number} n
 * @return {number}
 */
var memo = function(n, memo = {}) {
    if(n < 2) return n;
    if(n in memo) return memo[n];

    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n]
};

var fib = function(n) {
    let arr = [0,1,1];
    for(let i = 3; i <= n; i++){
        arr.push((arr[i-1]) + (arr[i-2]));
    }
    return arr[n];
}