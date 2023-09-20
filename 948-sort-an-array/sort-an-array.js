/**
 * @param {number[]} nums
 * @return {number[]}
 */

function helperFunction(arr1, arr2){
    let resArr = [];
    while(arr1.length && arr2.length){
        if(arr1[0] <= arr2[0]) resArr.push(arr1.shift());
        else resArr.push(arr2.shift());
    }
    return [...resArr, ...arr1, ...arr2]
}
function sortArray (nums) {
    // merge sort
    // find midle
    // declare left, right  
    // divide array into two halves
    // repeat recursivly until array has no element to divide

    if(nums.length <= 1) return nums;

    let midIdx = Math.floor(nums.length / 2);
    let leftPart = nums.slice(0,midIdx);
    let rightPrt = nums.slice(midIdx);
    return helperFunction(sortArray(leftPart), sortArray(rightPrt));

};