/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function(stones) {
    let visited = {}

    function dfs(idx){
        visited[idx] = true
        let row = stones[idx][0]
        let col = stones[idx][1]
        let combinedSum = 0
          for(let i =0 ; i < stones.length ; i++){
            if(!visited[i] && (stones[i][0] === row || stones[i][1] === col)){
                combinedSum += dfs(i) + 1
            }
        }
            return combinedSum
    }

    let totalSum = 0
    for(let i =0 ; i < stones.length; i++){
        if(visited[i]) continue
        totalSum += dfs(i)
    }

    return totalSum
};