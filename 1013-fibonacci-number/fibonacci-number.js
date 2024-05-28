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
    if(n == 0) return 0;
    let a = 1;
    let b = 1
    for(let i = 3; i <= n; i++){
        let temp = a;
        a = b;
        b = (temp + b);
    }
    return b;
}