/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const adj = new Array(n).fill(null).map(()=>[]);
    const count = new Array(n).fill(0);
    const res = new Array(n).fill(0);

    for(let [u,v] of edges){
        adj[u].push(v);
        adj[v].push(u)
    }

    const dfs1 = (cur, parent) => {
        count[cur] = 1;
        for(let child of adj[cur]){
            if(child != parent){
                dfs1(child, cur);
                count[cur] += count[child];
                res[cur] += res[child] + count[child];
            }
        }
    }

    const dfs2 = (cur, parent) => {
        for(let child of adj[cur]){
            if(child != parent){
                res[child] = res[cur] + n - 2 * count[child];
                dfs2(child, cur);
            }
        }
    }

    dfs1(0, -1);
    dfs2(0, -1);
    return res;
};