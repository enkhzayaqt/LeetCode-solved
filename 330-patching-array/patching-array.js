/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function(nums, n) {
    let miss = 1;
    let res = 0;
    let i = 0;
    while(miss <= n){
        if(i < nums.length && nums[i] <= miss){
            miss += nums[i];
            i++;
        }else {
            miss+= miss;
            res++;
        }
    }
    return res;
};