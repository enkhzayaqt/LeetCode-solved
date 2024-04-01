/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    let res = 0;
    let k = -1, l = -1, r = -1;

    for (let i = 0; i < nums.length; ++i) {
        if (!(minK <= nums[i] && nums[i] <= maxK)) k = i;
        if (nums[i] === minK) l = i; 
        if (nums[i] === maxK) r = i;
        res += Math.max(0, Math.min(l, r) - k);
    }
    return res;
};