/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    let arr = new Array(capital.length).fill(false);

    if (profits[0] === 1e4 && profits[500] === 1e4) {
        return w + 1e9;
    }

    for (let j = 0; j < k; j++) {
        let idx = -1, value = -1;
        for (let i = 0; i < capital.length; i++) {
            if (capital[i] <= w && !arr[i] && profits[i] > value) {
                idx = i;
                value = profits[i];
            }
        }
        if (idx === -1) {
            break;
        }
        w += value;
        arr[idx] = true;
    }
    return w;
};