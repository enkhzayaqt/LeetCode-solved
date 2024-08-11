/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    const directions = [
        [-1, 0], // up
        [0, 1], // right
        [1, 0], // down
        [0, -1], //left
    ];

    function dfs(matrix, row, col) {
        matrix[row][col] = 1;

        for (let direction of directions) {
            const nextRow = row + direction[0];
            const nextCol = col + direction[1];

            if (
                nextRow >= 0 &&
                nextRow <= matrix.length - 1 &&
                nextCol >= 0 &&
                nextCol <= matrix[0].length - 1 &&
                matrix[nextRow][nextCol] === 0
            ) {
            dfs(matrix, nextRow, nextCol);
            }
        }
    }

    const gridSize = grid.length;
    const matrixSize = gridSize * 3;
    const matrix = new Array(gridSize * 3)
    .fill(null)
    .map(() => new Array(gridSize * 3).fill(0));

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const row = i * 3;
      const col = j * 3;

      if (grid[i][j] === "\\") {
        matrix[row][col] = 1;
        matrix[row + 1][col + 1] = 1;
        matrix[row + 2][col + 2] = 1;
      }

      if (grid[i][j] === "/") {
        matrix[row][col + 2] = 1;
        matrix[row + 1][col + 1] = 1;
        matrix[row + 2][col] = 1;
      }
    }
  }

  let count = 0;
  for (let row = 0; row < matrixSize; row++) {
    for (let col = 0; col < matrixSize; col++) {
      if (matrix[row][col] === 0) {
        dfs(matrix, row, col); 
        count++;
      }
    }
  }

  return count;
};