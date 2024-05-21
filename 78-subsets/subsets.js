/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];

    const dfs = (i, cur) => {
        res.push([...cur]);

        for(let j = i; j < nums.length; j++){
            cur.push(nums[j]);
            dfs(j + 1, cur);
            cur.pop();
        }
    }
    dfs(0, [])
    return res;
};