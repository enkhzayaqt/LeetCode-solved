/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let bool = false;
    while (!bool) {
        bool = true;
        for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            bool = false;
            let temp = nums[i - 1];
            nums[i - 1] = nums[i];
            nums[i] = temp;
        }
        }
    }

    return nums;
};