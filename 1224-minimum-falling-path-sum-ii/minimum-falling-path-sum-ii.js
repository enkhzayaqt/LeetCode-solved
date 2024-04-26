/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
   if(grid.length === 1) return grid[0][0];
   let dp = grid.map(row=>row.slice());
   for(let i = 1; i < grid.length; i++){
    for(let j = 0; j < grid.length; j++){
        let min = Infinity;
        for(let k = 0; k < grid.length; k++){
            if(k !== j ){
                min = Math.min(min, dp[i-1][k]);
            }
            dp[i][j] = grid[i][j] + min;
        }
    }
   }
   return Math.min(... dp[grid.length - 1])
};