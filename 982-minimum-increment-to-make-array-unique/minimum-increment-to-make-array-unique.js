/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums.sort((a,b)=> a-b)
    let move = 0;
    for(let i = 1; i < nums.length; i++){
        while(nums[i] <= nums[i-1]){
            nums[i]++;
            move++;
        }
    }

    return move;
};