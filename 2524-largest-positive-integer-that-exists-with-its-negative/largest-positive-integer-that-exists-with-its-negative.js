/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    // sort the nums array
    // use 2 pointer 
    // using Math.abs method convert negative integer to positive
    // compare two side 
    // if left side is greater move left pointer
    // if right side is greater move right pointer
    // if they are same return right value
    // or return -1

    nums.sort((a,b)=> a-b);
    let l = 0;
    let r = nums.length -1;
    while(nums[l]<0){
        if(Math.abs(nums[l]) == nums[r]) return nums[r];
        if(Math.abs(nums[l]) > nums[r]){
            l++
        }else r--;
    }
    return -1;
    console.log(nums[l])
};