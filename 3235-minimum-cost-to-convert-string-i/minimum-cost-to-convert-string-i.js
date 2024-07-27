/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    const char = 26;

    const dist = Array.from({ length: char }, () => Array(char).fill(Infinity));

    for (let i = 0; i < char; i++) {
        dist[i][i] = 0;
    }

    for (let i = 0; i < original.length; i++) {
        const from = original[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const to = changed[i].charCodeAt(0) - 'a'.charCodeAt(0);
        dist[from][to] = Math.min(dist[from][to], cost[i]);
    }

    for (let k = 0; k < char; k++) {
        for (let i = 0; i < char; i++) {
            for (let j = 0; j < char; j++) {
                if (dist[i][k] < Infinity && dist[k][j] < Infinity) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    let totalCost = 0;
    for (let i = 0; i < source.length; i++) {
        const srcChar = source[i].charCodeAt(0) - 'a'.charCodeAt(0);
        const tarChar = target[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if (dist[srcChar][tarChar] === Infinity) {
            return -1; 
        }

        totalCost += dist[srcChar][tarChar];
    }

    return totalCost;
};