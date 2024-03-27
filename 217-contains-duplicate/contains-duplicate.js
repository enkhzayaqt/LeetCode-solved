/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    for(let num of nums){
        if(obj[num] == undefined ) {
            obj[num] = 1;
        } else return true;
    }
    return false
};