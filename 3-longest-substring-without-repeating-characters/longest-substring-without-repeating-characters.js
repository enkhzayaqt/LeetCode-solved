/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring (s) {
    if(s.length == 1) return 1;
    // create new map
    let map = new Map();
    // initiate max len 0
    let max = 0;
    // outer loop for starting character
    // inner loop to find out max len
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            // check if map has char
            // if map has it break and clear the map
            // else add it to map
            if(!map.has(s[j])){
                map.set(s[j]);
            } else {
                max = Math.max(max, map.size);
                map.clear();
                break
            }
        }
        // update max len by using Math.max
        // return max len
    }
    return max;
};