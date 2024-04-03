/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let row = board.length;
    let col = board[0].length;

    const dfs = (i, j, k) => {
        if(i < 0 || i >= row || j < 0 || j >= col ) return false;
        if(board[i][j] !== word[k] || board[i][j] === "#") return false;
        if(k == word.length -1) return true;

        const temp = board[i][j];
        board[i][j] ='#';
        const isExist = dfs(i+1, j, k+1) ||
                        dfs(i-1, j, k+1) ||
                        dfs(i, j+1, k+1) ||
                        dfs(i, j-1, k+1);
        board[i][j] = temp;
        return isExist;
    }

    for(let i=0; i < row; i++){
        for(let j = 0; j < col; j++){
            if(dfs(i, j, 0)) return true;
        }
    }
    return false;
};