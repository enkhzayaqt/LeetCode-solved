/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByKBruteForce = function(nums, k) {
    let count = 0;
    for(let i= 0; i < nums.length; i++){
        let sum = nums[i];
        if(sum % k == 0 ) count++;
        for(let j = i+1; j < nums.length; j++){
            sum += nums[j];
            if(sum % k == 0 ) count++;
        }
    }
    return count;
};

var subarraysDivByK = function(nums, k) {
    let count = 0;
    let sum = 0;
    let obj = {0:1};

    for(let num of nums){
        sum += num;
        let mod = sum % k;
        if(mod < 0){
            mod += k;
        }
        if(mod in obj){
            count += obj[mod];
            obj[mod] += 1;
        }else {
            obj[mod] = 1;
        }
    }
    return count;
};