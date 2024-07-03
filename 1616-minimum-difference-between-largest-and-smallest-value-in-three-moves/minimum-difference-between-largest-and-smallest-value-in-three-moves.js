/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length <= 4) return 0;
    nums.sort((a,b)=>a-b);
    let min = Math.abs(Math.min(...nums)- Math.max(...nums));
    // 0,3
    min = Math.min(min, Math.abs(nums[nums.length - 4]- nums[0]));
    // 1,2
    min = Math.min(min, Math.abs(nums[nums.length - 3]- nums[1]));
    // 2,1
    min = Math.min(min, Math.abs(nums[nums.length - 2]- nums[2]));
    // 3,0
    min = Math.min(min, Math.abs(nums[nums.length - 1]- nums[3]));
    return min;
};