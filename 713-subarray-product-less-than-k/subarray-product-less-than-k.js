/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let res = 0;
    let left = 0;
    let product = 1;
    for(let right in nums){
        product *= nums[right];
        while(left <= right && product >= k){
            product = product / nums[left];
            left++;
        }
        res += (right - left + 1);
    }
    return res;
};