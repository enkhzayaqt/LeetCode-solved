/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
    const memo = new Map(); 

    function dfs(idx, pos) {
        if (pos === key.length) return 0; 

        const memoKey = idx + "-" + pos;
        if (memo.has(memoKey)) return memo.get(memoKey); 

        const char = key[pos];
        let minSteps = Infinity;

        for (let i = 0; i < ring.length; i++) {
            if (ring[i] === char) {
                const clockWiseSteps = Math.abs(idx - i); 
                const counterClockWiseSteps = ring.length - clockWiseSteps; 
                const stepsFromHere = Math.min(clockWiseSteps, counterClockWiseSteps) + 1; 
                const stepsToEnd = dfs(i, pos + 1); 
                minSteps = Math.min(minSteps, stepsFromHere + stepsToEnd); 
            }
        }

        memo.set(memoKey, minSteps); 
        return minSteps;
    }

    return dfs(0, 0);
};