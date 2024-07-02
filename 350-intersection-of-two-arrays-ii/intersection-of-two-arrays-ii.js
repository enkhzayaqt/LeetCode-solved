/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let resArr = [];
    if(nums1.length <= nums2.length){
        for(let num of nums1){
            if(nums2.includes(num)){
                resArr.push(num);
                let i =nums2.indexOf(num);
                nums2.splice(i,1);
            }
        }
    }else {
        for(let num of nums2){
            if(nums1.includes(num)){
                resArr.push(num);
                let i =nums1.indexOf(num);
                nums1.splice(i,1);
            }
        }
    }
    return resArr;
};