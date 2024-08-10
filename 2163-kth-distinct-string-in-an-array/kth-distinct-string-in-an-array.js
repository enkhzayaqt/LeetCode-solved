/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let obj = {};
    for(let char of arr){
        if(obj[char] === undefined){
            obj[char] = 1;
        }else {
            obj[char] += 1;
        }
    }
    let distinctArr = [];
    for(let key in obj){
        if(obj[key] == 1) distinctArr.push(key);
    }
    
    return (distinctArr.length < k) ? "" : distinctArr[k-1];
};