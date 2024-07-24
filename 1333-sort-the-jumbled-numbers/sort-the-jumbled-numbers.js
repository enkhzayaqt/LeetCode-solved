/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */
var sortJumbled = function(mapping, nums) {
    // Convert numbers based on the mapping
    let numsArr = nums.map(num => {
        let numStr = String(num);
        let mappedNumStr = '';
        for (let i of numStr) {
            mappedNumStr += mapping[parseInt(i)];
        }
        return parseInt(mappedNumStr, 10);
    });

    // Sort based on the mapped values while maintaining relative order
    return nums
        .map((num, index) => [num, numsArr[index]])
        .sort((a, b) => {
            if (a[1] !== b[1]) {
                return a[1] - b[1]; // Sort by mapped values
            }
            return nums.indexOf(a[0]) - nums.indexOf(b[0]); // Maintain relative order
        })
        .map(item => item[0]);
};