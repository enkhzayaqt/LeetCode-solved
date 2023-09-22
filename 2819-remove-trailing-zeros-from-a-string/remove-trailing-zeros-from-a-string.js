/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    if(num[num.length -1] != '0')  return num
    let arr = num.split('');
    while(arr[arr.length-1] == '0'){
        arr.pop()
    }
    
    return arr.join('');
};