/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
    for(let i = 0 ; i< nums.length; i++){
        obj[nums[i]] = i;
    }
    for(let i in nums){
        if(obj[target - nums[i]]){
            if(i == obj[target - nums[i]]) continue;
            return [i, obj[target - nums[i]]]
        }
    }
};