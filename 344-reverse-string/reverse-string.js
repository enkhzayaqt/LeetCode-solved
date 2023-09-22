/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // create two pointer
    // create temp var
    // loop through input
    // switch values
    // return input array;
    let temp = ''
    for(let i = 0, j = s.length-1; i<j; i++, j--){
        temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
    console.log(s)
};