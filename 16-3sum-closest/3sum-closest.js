/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let res = 0;
    let minDiff = Number.MAX_SAFE_INTEGER;

    nums.sort((a,b)=>a-b);

    for(let i = 0; i < nums.length -2; i++){
        let l = i+1;
        let r = nums.length - 1;

        while(l < r){
            let sum = nums[i] + nums[l] + nums[r];
            if(sum == target) return target;
            if(sum < target) {
                l++;
            }else {
                r--;
            }
            let diff = Math.abs(target - sum);
            if(diff < minDiff){
                minDiff = diff;
                res = sum;
            }
        }
    }
    return res
};