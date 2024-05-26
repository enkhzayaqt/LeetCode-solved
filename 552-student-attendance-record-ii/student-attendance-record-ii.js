/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    const MOD = 1000000007;
    let arr = new Array(n).fill(0).map(()=> new Array(2).fill(0).map(()=> new Array(3).fill(-1)));

    const dfs = (i, countA, countL) => {
        if(i === n)return 1;

        if(arr[i][countA][countL] !== -1) return arr[i][countA][countL];

        let nextA = (countA === 0) ? dfs(i +1, countA+1, 0) : 0;
        let nextL = (countL === 2) ? 0 : dfs(i +1, countA, countL +1);
        let nextP = dfs(i+1, countA, 0);
        let total = ((nextA + nextL) % MOD + nextP) % MOD;

        arr[i][countA][countL] = total;
        return total;
    }
    return dfs(0,0,0)
};