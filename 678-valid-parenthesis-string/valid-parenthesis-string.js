/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    // edge case: if its start with closing return false;
    if(s[0] == ')') return false;

    let low = 0, high = 0;

    for (const c of s) {
        if (c === '(') {
            low++;
            high++;
        } else if (c === ')') {
            low = Math.max(0, low - 1);
            high--;
        } else if (c === '*') {
            low = Math.max(0, low - 1);
            high++;
        }
        if (high < 0) {
            return false;
        }
    }

    return low === 0;
};