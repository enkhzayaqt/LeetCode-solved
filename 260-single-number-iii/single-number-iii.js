/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    if(nums.length == 2) return nums;
    nums.sort((a,b) => a-b);
    let stack = [];
    for(let num of nums){
        if(stack.includes(num)){
            stack.pop();
        } else {
            stack.push(num);
        }
    }
    return stack;
};