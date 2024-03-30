/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function(nums, k) {
     const helper = (nums, k) => {
        let l = 0, r = 0, res = 0;
        const map = new Map();
        
        while (r < nums.length) {
            map.set(nums[r], (map.get(nums[r]) || 0) + 1);
            
            while (map.size > k) {
                map.set(nums[l], map.get(nums[l]) - 1);
                if (map.get(nums[l]) === 0) map.delete(nums[l]);
                l++;
            }
            
            res += r - l + 1;
            r++;
        }
        
        return res;
    };
    
    return helper(nums, k) - helper(nums, k - 1);
};