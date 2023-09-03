/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let len = s.length;
    for (let i = 1; i <= len / 2; i++) {
        if (len % i === 0) {
            const substring = s.slice(0, i);
            let repeated = "";
            for (let j = 0; j < len / i; j++) {
                repeated += substring;
            }
            if (repeated === s) return true;
        }
    }
    return false;
};