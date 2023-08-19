/**
 * @param {character[][]} grid
 * @return {number}
 */

 //time: O(r*c)
 //space: O(1)
function numIslands (grid) {
    // if empty return 0
    if(!grid.length) return 0;

    let row = grid.length;
    let col = grid[0].length;
    let count = 0;

    function dfs(r,c){
        if(r < 0 || r == row || c < 0 || c == col) return;
        if(grid[r][c] != '1') return;
        grid[r][c] = 'v';

        dfs(r-1, c);
        dfs(r, c-1);
        dfs(r+1, c);
        dfs(r, c+1);
    }
    for(let r = 0; r < row; r++){
        for(let c = 0; c < col; c++){
            if(grid[r][c] == '1'){
                dfs(r,c);
                count++;
            }
        }
    }
    return count;
};