/**
 * @param {number[]} arr
 * @return {number}
 */
var countTriplets = function(arr) {
    let res = 0;
    let prefix = new Array(arr.length +1).fill(0);
    for(let i = 1; i < arr.length +1; i++){
        prefix[i] = prefix[i-1] ^ arr[i-1];
    }
    for(let i = 0; i < arr.length+1; i++){
        for(let j = i+1; j < arr.length+1; j++){
            if(prefix[i] == prefix[j]) res += j - i -1
        }
    }
    return res;
};