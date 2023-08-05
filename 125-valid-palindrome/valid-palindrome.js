/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase();
    let arr = [];
    for(let i = 0; i < s.length; i++){
        if((str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123) || 
            (str[i].charCodeAt() > 47 && str[i].charCodeAt() < 58) ){
            arr.push(str[i]);
        }
    }
    let l = 0;
    let r = arr.length-1;
    if(arr.length == 1) return true;    
    while(l<r){
        if(arr[l] !== arr[r]){
            return false;
        } else {
            l++;
            r--;
        }
    }
    return true;
};