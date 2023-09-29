/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function(n) {
    let n1 = 2 * n;
    let n2 = 3 * n;
    let res = (String(n) + String(n1) + String(n2));
    if(res.length > 9 ) return false;
    if(res.includes("0")) return false;
    let map = new Map();
    for(let i = 0; i < res.length; i++){
        if(map.has(res[i])) return false
        map.set(res[i])
    }
    return true;
};