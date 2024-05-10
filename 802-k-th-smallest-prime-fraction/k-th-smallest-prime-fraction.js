/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function(arr, k) {
    let len = arr.length;

    // edge case 1: if array length is 2 return it;
        if(arr.length == 2) return arr;
    // edge case 2: if k is 1 return first & last number;
        if(k == 1) return [arr[0], arr[len-1]];

    // nested loop and put fractions into res array;
    // return k th element from res array(array[k-1]);
    
    let res = [];
    for(let i = 0; i < len; i++){
        for(let j = i+1; j < len; j++){
            res.push([arr[i] / arr[j], arr[i], arr[j]])
        }
    }
    res.sort((a,b)=>a[0]-b[0]);
    return [res[k-1][1], res[k-1][2]];
};