/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const count = new Map();
    nums.forEach(num => {
        count.set(num, (count.get(num) || 0) +1) 
    })
    const res = nums.sort((a,b) => {
        if(count.get(a) !== count.get(b)){
            return count.get(a) - count.get(b)
        }else {
            return b-a
            }
    })
    return res;
};