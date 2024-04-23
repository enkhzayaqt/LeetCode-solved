/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    if (n === 1) return [0]; 
    
    const adjList = {};
    for (const [u, v] of edges) {
        if (!adjList[u]) adjList[u] = [];
        if (!adjList[v]) adjList[v] = [];
        adjList[u].push(v);
        adjList[v].push(u);
    }

    let leaves = [];
    for (const node in adjList) {
        if (adjList[node].length === 1) {
            leaves.push(parseInt(node));
        }
    }

    while (n > 2) {
        n -= leaves.length;
        const newLeaves = [];
        for (const leaf of leaves) {
            const neighbor = adjList[leaf].pop(); 
            adjList[neighbor].splice(adjList[neighbor].indexOf(leaf), 1); 
            if (adjList[neighbor].length === 1) {
                newLeaves.push(neighbor);
            }
        }
        leaves = newLeaves;
    }

    return leaves;
};