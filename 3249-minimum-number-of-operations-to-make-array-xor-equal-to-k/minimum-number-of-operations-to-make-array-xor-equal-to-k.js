/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // step 1: find XOR of nums array;
    let xor = nums.reduce((acc,cur)=> acc ^ cur, 0);
    // step 2: compare XOR result with target K;

    let temp = xor ^ k
    console.log(temp)

    // step 3: count number of set bits;

    let count = 0;
    while(temp > 0){
        count += temp & 1;
        temp >>= 1;
    }
    return count; 


    // time: O(n);
    // space: O(n);

};