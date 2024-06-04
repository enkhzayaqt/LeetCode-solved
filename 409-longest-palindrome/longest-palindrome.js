/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    if(s.length == 1) return 1;
    let res = 0;
    let obj = {};
    for(let char of s){
        if(obj[char] == undefined){
            obj[char] = 1;
        }else{
            obj[char] += 1;
        }
    }
    for(let [key, value] of Object.entries(obj) ){
        if(value % 2 == 0){
            res += value;
        }else {
            res += (value - 1)
        }
    }
    res = (res < s.length) ? res + 1 : res; 
    return res;
};