/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // find all the sub array using nested loop
    // check if product is less than k increase count
    // return count
    let count = 0;
    for(let i = 0 ; i < nums.length; i++){
        let product = 1;
        for(let j = i ; j < nums.length; j++){
            product = product * nums[j]
            if(product >= k) break
            count++;
        }
    }
    return count;
};