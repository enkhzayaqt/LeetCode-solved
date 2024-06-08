/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySumBruteForce = function(nums, k) {
    // in nested loop get all the sums;
    // divide sum by k and if there is remainder move on to next number;
    // if no remainder return true;
    // end of the function return false;
    for(let i = 0; i < nums.length; i++){
        let sum = nums[i];
        for(let j = i+1; j < nums.length; j++){
            sum += nums[j];
            if(sum % k == 0){
                return true
            }
        }
    }
    return false;
};

var checkSubarraySum = function(nums, k) {
    const remainderMap = {0: -1};  
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let remainder = sum % k;
        
        if (remainder < 0) {
            remainder += k;  
        }
        
        if (remainder in remainderMap) {
            if (i - remainderMap[remainder] > 1) {  
                return true;
            }
        } else {
            remainderMap[remainder] = i;
        }
    }
    
    return false;
};