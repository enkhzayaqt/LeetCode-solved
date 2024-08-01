/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    let idx = 0;
        for (let i = 1; i <= n; i++) {
            idx = (idx + k) % i;
        }
        return idx + 1;
};