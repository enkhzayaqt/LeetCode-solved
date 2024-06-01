/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let l = 0; 
    let cost = 0; 
    let res = 0;

    for (let r = 0; r < s.length; r++) {
        cost += Math.abs(s.charCodeAt(r) - t.charCodeAt(r));

        while (cost > maxCost) {
            cost -= Math.abs(s.charCodeAt(l) - t.charCodeAt(l));
            l++;
        }

        res = Math.max(res, r - l + 1);
    }

    return res;
};