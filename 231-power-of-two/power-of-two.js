/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo (n) {
    let x = 0;
    while(2**x < n){
        x++;
    }
    return 2**x === n
};