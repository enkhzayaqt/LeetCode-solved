/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    // sliding window solution
    // create two pointer
    // left will stay right will increase
    // keep track of max & min
    // if max & min difference become greater than limit update the res and move left pointer
    // this will run while left is less than right
    // once the loop is finished running return res;
    let l = 0;
    let r = 0;
    let res = 0;
   
    // arrays to keep the indices of the min and max elements
    let minArr = [];
    let maxArr = [];
    
    while (r < nums.length) {
        // track the max 
        while (maxArr.length && nums[maxArr[maxArr.length - 1]] <= nums[r]) {
            maxArr.pop();
        }
        maxArr.push(r);
        
        // track the min 
        while (minArr.length && nums[minArr[minArr.length - 1]] >= nums[r]) {
            minArr.pop();
        }
        minArr.push(r);
        
        // Check if the current window is valid
        while (nums[maxArr[0]] - nums[minArr[0]] > limit) {
            l++;
            if (maxArr[0] < l) {
                maxArr.shift();
            }
            if (minArr[0] < l) {
                minArr.shift();
            }
        }
        
        res = Math.max(res, r - l + 1);        
        r++;
    }
    
    return res; 
};