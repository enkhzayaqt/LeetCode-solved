/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let depth = 0;
    let max = 0;
    for(let i of s){
        if(i == "(") depth++;
        if(i == ")") {
            max = Math.max(depth, max);
            depth--;
        }
    }
    return max;
};