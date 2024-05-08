/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const len = score.length;
    const res = new Array(len);
    const scoreIdx = score.map((score, index) => [score, index]);

    scoreIdx.sort((a, b) => b[0] - a[0]);

    const rank = ["Gold Medal", "Silver Medal", "Bronze Medal"];

    for (let i = 0; i < len; i++) {
        const index = scoreIdx[i][1];
        if (i < 3) {
            res[index] = rank[i];
        } else {
            res[index] = String(i + 1);
        }
    }

    return res;
};