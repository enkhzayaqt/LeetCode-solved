/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let islandCount = 0;

    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    function bfs(row, col) {
        const queue = [[row, col]];
        grid[row][col] = '0'; 

        while (queue.length > 0) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;

                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = '0'; 
                }
            }
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') {
                islandCount++;
                bfs(i, j);
            }
        }
    }

    return islandCount;
};