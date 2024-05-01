/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // step 1: calculates the XOR of all elements in the nums array using the reduce method;
    let xor = nums.reduce((acc,cur)=> acc ^ cur, 0);

    // step 2: compare XOR result with target K;
    let temp = xor ^ k

    // step 3: count number of set bits;
    let count = 0;
    while(temp > 0){
        count += temp & 1;
        temp >>= 1;  // shifts temp to the right by 1 bit to check the next bit
    }
    return count; 
    // time: O(n);
    // space: O(n);

};