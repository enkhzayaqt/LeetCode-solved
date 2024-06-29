/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
var getAncestors = function(n, edges) {
    let ancestors = Array.from({ length: n }, () => new Set());
    let adjList = Array.from({ length: n }, () => []);
    let inDegree = Array(n).fill(0);

    for (let [from, to] of edges) {
        adjList[from].push(to);
        inDegree[to]++;
    }

    let queue = [];
    for (let i = 0; i < n; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length > 0) {
        let node = queue.shift();
        for (let neighbor of adjList[node]) {
            ancestors[neighbor].add(node);
            for (let ancestor of ancestors[node]) {
                ancestors[neighbor].add(ancestor);
            }
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    let res = ancestors.map(set => Array.from(set).sort((a, b) => a - b));

    return res;
};