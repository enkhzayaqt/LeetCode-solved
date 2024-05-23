/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function(nums, k) {
    const helper = (arr) => {
        if(arr.length == 0) return 0;
        let res = 0;
        for(let i = 0; i < arr.length; i++){
            let next = [];
            for(let j = i+1; j < arr.length; j++){
                if(Math.abs(arr[i] - arr[j]) !== k){
                    next.push(arr[j])
                }
            }
            res += 1 + helper(next);
        }
        return res;
    }
    return helper(nums)
};