/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    let count = 0;
    for(let char of s){
        if(char == "1") count+=1;
    }
    console.log(count)
    return "1".repeat(count -1 ) + '0'.repeat(s.length - count) + '1';
};