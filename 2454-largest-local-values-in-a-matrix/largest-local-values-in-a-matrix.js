/**
 * @param {number[][]} grid
 * @return {number[][]}
 */

 function findMax(matrix, row, col) {
    let max = matrix[row][col];
    for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
            max = Math.max(max, matrix[i][j]);
        }
    }
    return max;
}

var largestLocal = function(grid) {
    const nRows = grid.length;
    const nCols = grid[0].length;

    let res = new Array(nRows - 2).fill().map(() => new Array(nCols - 2).fill(0));

    for (let row = 0; row < nRows - 2; row++) {
        for (let col = 0; col < nCols - 2; col++) {
            res[row][col] = findMax(grid, row, col);
        }
    }
    return res;
};