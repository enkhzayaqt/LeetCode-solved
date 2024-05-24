/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    // brute force solution;
    // run nested loop;
    // check all the products
    // if product is strictly less than k put it in result array
    // if not end that loop;
    // return result array length;
    
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < k) count++;
        let product = nums[i];
        for(let j = i+1; j < nums.length; j++){
            product *= nums[j];
            if(product < k){
                count++;
            }else break;
        }
    }
    return count;
};