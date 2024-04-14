/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if(!matrix) return 0;
    let cols = matrix[0].length;
    const heights = new Array(cols + 1).fill(0);     
    let max = 0;

    for (let row of matrix) {
            for (let i = 0; i < cols; i++) {
                heights[i] = (row[i] === '1') ? heights[i] + 1 : 0;
            }

            const stack = [];
            for (let i = 0; i < heights.length; i++) {
                while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
                    const h = heights[stack.pop()];
                    const w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
                    max = Math.max(max, h * w);
                }
                stack.push(i);
            }
        }
    return max;
};