/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findMaxAverage (nums, k) {
    let max = Math.min(...nums);
    let average = 0;
    let sum = 0;
    for(let i = 0; i <= nums.length-k; i++){
        for(let j = i; j < k+i; j++){
            sum += nums[j];
        }
        average = sum / k
        max = Math.max(average, max);
        average = 0;
        sum = 0;
    }
    return max;
};