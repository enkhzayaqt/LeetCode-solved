/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b); 
    let res = [];
    let cur = [];
    
    const helper = (target, start) => {
        if (target === 0) { 
            res.push([...cur]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue; 
            if (candidates[i] > target) break; 
            cur.push(candidates[i]);
            helper(target - candidates[i], i + 1); 
            cur.pop(); 
        }
    };
    
    helper(target, 0);
    return res;
};