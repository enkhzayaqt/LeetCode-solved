/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let countOfSubarrays = 0;
    let countOfOdd = 0;
    let countOfPrefix = {0: 1};
    for(let i = 0; i < nums.length; i++){
        // odd
        if(nums[i] % 2 !== 0){
            countOfOdd++;
        }
        if(countOfPrefix[countOfOdd - k] !== undefined){
            countOfSubarrays += countOfPrefix[countOfOdd - k];
        }

        if(countOfPrefix[countOfOdd] == undefined){
            countOfPrefix[countOfOdd] = 0;
        }
        countOfPrefix[countOfOdd]++;
    }
    return countOfSubarrays;
};