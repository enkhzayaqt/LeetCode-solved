/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            if(!map.has(s[j])){
                map.set(s[j]);
                max = Math.max(max, map.size);
            } else {
                map.clear();
                break;
            }
        }
    }
    return max;
};