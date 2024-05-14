/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let max = 0;
    let m = grid.length, n = grid[0].length;

    const backTrack = (row, col, cur) => {
        if(row < 0 || row >= m || col < 0 || col >= n || grid[row][col] === 0){
            return;
        }

        const gold = grid[row][col];
        cur += gold;
        max = Math.max(max, cur);
        grid[row][col] = 0;

        backTrack(row +1, col, cur);
        backTrack(row, col +1, cur);
        backTrack(row -1, col, cur);
        backTrack(row, col -1, cur);

        grid[row][col] = gold;
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] !== 0){
                backTrack(i, j, 0)
            }
        }
    }
    return max;
};