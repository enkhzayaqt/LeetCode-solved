/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let t = [0,1,1];
    if(n < 2) return n;

    for(let i = 3; i <= n; i++){
        let sum = (t[0] + t[1] + t[2]);
        t[0] = t[1];
        t[1] = t[2];
        t[2] = sum;
    }
    return t[2]

};