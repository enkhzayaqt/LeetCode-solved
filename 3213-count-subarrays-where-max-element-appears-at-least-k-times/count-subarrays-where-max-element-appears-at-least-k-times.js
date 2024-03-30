/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let maxCount = 0;
    let l = 0;
    let max = Math.max(...nums);
    let res = 0;
    for(let r in nums){
        if(nums[r] == max){
            maxCount++;
        }
        while(maxCount == k){
            if(nums[l] == max) maxCount--;
            l++;
        }  
        res += l 
    }    
    return res;
};