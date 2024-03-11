/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let max = 0
    let left = 0;
    let right = height.length-1;
    while(left < right){
        let area = (right - left) * Math.min(height[left], height[right]);
        max = Math.max(area, max);
        if(height[left] > height[right]){
            right--;
        }else {
            left++;
        }
    }
    return max;
};