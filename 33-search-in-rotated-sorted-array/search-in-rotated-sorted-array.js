/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // use binary search time: O(log n)
    // set l, r, m pointer
    // while l < r check m 
    // if m is target return m
    // if m is greater than target 
    // & l is also greater then move l to m
    // if m is less than target & l is greater than target move l to m
    let l = 0;
    let r = nums.length - 1;
    while(l <= r){
        let m = Math.floor((l+r) / 2 );
        if(nums[m] == target) return m;
        if(nums[l] <= nums[m] ){
            if(target > nums[m] || target < nums[l]){
                l = m + 1;
            }else {
                r = m - 1;
            }
        }else {
            if(target < nums[m] || target > nums[r]){
                r = m - 1;
            }else {
                l = m + 1;
            }
        }
    }
    return -1;
};