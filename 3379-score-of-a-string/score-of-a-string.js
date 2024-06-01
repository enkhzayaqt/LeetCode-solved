/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let arr = [];
    let sum = 0;
    for(let i in s){
        arr.push(s.charCodeAt(i))
    };
    for(let i = 0; i < s.length-1; i++){
        sum += (Math.abs(arr[i]- arr[i+1]))
    }
    return sum;
};