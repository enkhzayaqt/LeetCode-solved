/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity;
    let l = 0;
    let sum = 0;
    for(let r = 0; r < nums.length; r++){
        sum = sum + nums[r];
        while(sum >= target){
            sum = sum - nums[l];
            min = Math.min((r-l)+1, min);
            l++;
        }
    }
    return min == Infinity ? 0 : min;
};