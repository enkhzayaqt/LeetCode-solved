/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    let degrees = new Array(n).fill(0);
    for (let [a, b] of roads) {
        degrees[a]++;
        degrees[b]++;
    }

    const sortedCities = Array.from({length: n}, (_, i) => i).sort((a, b) => degrees[b] - degrees[a]);

    let values = new Array(n);
    for (let i = 0; i < n; i++) {
        values[sortedCities[i]] = n - i;
    }

    let sum = 0;
    for (let [a, b] of roads) {
        sum += values[a] + values[b];
    }

    return sum;
};