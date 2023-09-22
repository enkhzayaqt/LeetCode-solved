/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    if(num[num.length-1] != '0') return num;

    let result = '';
    for(let i = num.length-1; i >=0; i--){
        if(num[i] != '0' || result.length > 0) result = num[i] + result;
    }
    return result
};