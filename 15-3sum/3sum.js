/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum (nums) {
    const resArr = [];
    if(nums.length < 3) return resArr;

    nums = nums.sort((a,b)=>a-b);

    for(let i = 0; i < nums.length-2; i++){
        if(nums[i] > 0) break;
        if(i>0 && nums[i] == nums[i-1]) continue;

        let l = i + 1;
        let r = nums.length - 1;

        while(l < r){
            if((nums[i] + nums[l] + nums[r]) == 0){
                resArr.push([nums[i], nums[l], nums[r]]);
                while(l < r && nums[l] == nums[l+1])l++;
                //while(l < r && nums[r] == nums[r-1])r--;
                l++;
                //r--;
            } else if((nums[i] + nums[l] + nums[r]) > 0){
                r--;
            } else if((nums[i] + nums[l] + nums[r]) < 0) {
                l++;
            }
        }
    }
    return resArr;
};