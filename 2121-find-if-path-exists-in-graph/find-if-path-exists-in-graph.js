/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const list = {};
    const visited = new Set();

    for(let [u,v] of edges){
        if(!list[u]) list[u] = [];
        if(!list[v]) list[v] = [];
        list[u].push(v)
        list[v].push(u)
    }

    const dfs = (node, visited) => {
        visited.add(node);
        if(node == destination) return true;
        if(list[node]){
            for(let n of list[node]){
                if(!visited.has(n)){
                    if(dfs(n, visited)) return true;
                }
            }
        }
        return false;
    }
    return dfs(source, visited);
};