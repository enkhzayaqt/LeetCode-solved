/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function(grid) {
    // row:
    // check if row starts with 0;
    // if so flip every num in row;
    for(let i = 0; i < grid.length; i++){
        let first = grid[i][0];
        if(first == 0){
            for(let j = 0; j < grid[i].length; j++){
                grid[i][j] = grid[i][j] == 1 ? 0 : 1
            }
        }
    }

    // col:
    // nested loop start from second col 
    // count 1s and compare with length of the col and find out 0s;
    // if col has 0 > 1 we have to flip that col too;

    for(let i = 0; i < grid[0].length; i++){
        let count = 0;
        for(let j = 0; j < grid.length; j++){
            count += grid[j][i];
        }

        if(count < grid.length-count){
            for(let j = 0; j < grid.length; j++){
                grid[j][i] = grid[j][i] == 1 ? 0 : 1;
            }
        }
    }

    // sum:
    // convert each row to coresponding number(parseInt(...row, 2));
    // return sum; 
    let sum = 0;
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[i].length; j++){
            sum += grid[i][j] << grid[i].length - j - 1
        }
    }
    return sum;
};