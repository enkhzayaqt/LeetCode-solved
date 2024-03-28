/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let len = 0;
    let freq = {};
    let l = 0;
    for(let r in nums){
        if(!freq[nums[r]]){
            freq[nums[r]] = 1
        }else freq[nums[r]] += 1;

        while(freq[nums[r]] > k){
            freq[nums[l]] -= 1;
            l++;
        }
        len = Math.max(len, (r-l+1))
    }
    return len;
};