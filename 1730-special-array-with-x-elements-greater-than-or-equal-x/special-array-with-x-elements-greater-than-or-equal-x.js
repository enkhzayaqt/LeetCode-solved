/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    nums.sort((a,b) => b-a);
    let poped = [];
    for(let i = nums.length-1; i >= 0; i--){
        if(nums[i] < nums.length){
            poped.push(nums.pop());
        }else if(nums[i] >= nums.length && !poped.includes(nums.length)){
            return nums.length;
        }
    }
    return -1
};