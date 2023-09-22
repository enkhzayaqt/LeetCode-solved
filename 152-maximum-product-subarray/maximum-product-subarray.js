/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = Math.max(...nums);

    for(let i = 0; i < nums.length; i++){   
        let temp = nums[i];     
        
        for(let j= i+1; j < nums.length; j++){
            temp *= nums[j];
            max = Math.max(max, temp)
        }

    }
    return max;
};