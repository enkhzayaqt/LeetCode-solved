/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    // count the total 1s;
    // our window will be length of that count;
    let totalOnes = 0;
    for(let num of nums){
        if(num === 1) totalOnes++;
    }
    
    // then find the window that contains most 1s in it;
    let l = 0; 
    let windowOnes = 0;
    let maxWindowOnes = 0;
    for(let r = 0; r < nums.length * 2; r++){
        if(nums[r % nums.length] === 1){
            windowOnes++;
        }
        if(r-l+1 > totalOnes){
            windowOnes -= nums[l % nums.length]
            l++;
        }
        maxWindowOnes = Math.max(maxWindowOnes, windowOnes);

    }
    return totalOnes - maxWindowOnes;
};