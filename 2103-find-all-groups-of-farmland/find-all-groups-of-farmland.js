/**
 * @param {number[][]} land
 * @return {number[][]}
 */
var findFarmland = function(land) {
    let res = [];

    const dfs = (r,c) => {
        if(
            r < 0 || r >= land.length ||
            c < 0 || c >= land[0].length ||
            land[r][c] !== 1
            ){
                return [r-1, c-1]; // excluding the boundery cell and pointing tp the last valid cell.
           } 
        land[r][c] = 0 // marking it as a visited

        const firstBottomRight = dfs(r+1, c);
        const nextBottomRight = dfs(r, c+1);

        return [firstBottomRight[0], nextBottomRight[1]];
    }

    for(let r = 0; r < land.length; r++){
        for(let c = 0; c < land[0].length; c++){
            if(land[r][c] == 1){
                let top = [r,c];
                let bottom = dfs(r,c);
                res.push([...top, ...bottom]);
            }
        }
    }
    return res;
};