/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let newMap = new Map();
    for(let i = 0; i < nums.length; i++){
        let cur = nums[i];
        if(newMap.has(cur)) {
            return true;
        } else {
            newMap.set(cur);
        }
    }
    return false;
};