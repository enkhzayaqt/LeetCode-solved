/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    if(!nums.length) return 0;

    const dfs = (i, sum) => {
        if(i == nums.length) return sum;
        return dfs(i + 1, sum ^ nums[i]) + dfs(i + 1, sum);
    }
    return dfs(0,0);
};