/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
    const find = (parent, x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent, parent[x]);
        }
        return parent[x];
    };

    const union = (parent, rank, x, y) => {
        const rootX = find(parent, x);
        const rootY = find(parent, y);

        if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
             parent[rootX] = rootY;
            } else {
                parent[rootY] = rootX;
                rank[rootX] += 1;
            }
            return true;
        }
        return false;
    };

    const parentAlice = Array.from({ length: n + 1 }, (_, i) => i);
    const rankAlice = Array(n + 1).fill(1);
    const parentBob = Array.from({ length: n + 1 }, (_, i) => i);
    const rankBob = Array(n + 1).fill(1);

    let edgesRequired = 0;

    for (const [type, u, v] of edges) {
        if (type === 3) {
            if (union(parentAlice, rankAlice, u, v)) {
                union(parentBob, rankBob, u, v);
                edgesRequired++;
            }
        }
    }

    for (const [type, u, v] of edges) {
        if (type === 1) {
            if (union(parentAlice, rankAlice, u, v)) {
                edgesRequired++;
            }
        }
    }

    for (const [type, u, v] of edges) {
        if (type === 2) {
            if (union(parentBob, rankBob, u, v)) {
                edgesRequired++;
            }
        }
    }

    const isFullyTraversable = (parent) => {
        const root = find(parent, 1);
        for (let i = 2; i <= n; i++) {
            if (find(parent, i) !== root) return false;
        }
        return true;
    };

    if (isFullyTraversable(parentAlice) && isFullyTraversable(parentBob)) {
        return edges.length - edgesRequired;
    } else {
        return -1;
    }
};