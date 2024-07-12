/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    let res = 0;
    const helper = (str, sub, points) => {
        let stack = [];
        for (let char of str) {
            stack.push(char);
            if (stack.length >= 2 && stack[stack.length - 2] + stack[stack.length - 1] === sub) {
                stack.pop();
                stack.pop();
                res += points;
            }
        }
        return stack.join('');
    }

    if (x > y) {
        s = helper(s, "ab", x);
        s = helper(s, "ba", y);
    } else {
        s = helper(s, "ba", y);
        s = helper(s, "ab", x);
    }

    return res;
};