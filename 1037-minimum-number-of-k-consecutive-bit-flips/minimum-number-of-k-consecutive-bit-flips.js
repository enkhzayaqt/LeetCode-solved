/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
     let arr = [];
     let res = 0;
     for(let i = 0; i < nums.length; i++){
        while(arr.length > 0 && arr[0] + k <= i){
            arr.shift();
        }
        if((nums[i] + arr.length) % 2 == 0){
            if(i + k > nums.length) return -1;
            res += 1;
            arr.push(i);
        }
     }
     return res;
};