/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    // find all possible substring
    // use helper function to check if substring is polindrome or not.
    // if it is palindrome push it into array;

    const res = [];
    const arr = [];

    const isPalindrome = (s, l, r) => {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    const solve = (s, i, previous) => {
        if (i === s.length) {
            if (isPalindrome(s, previous, i)) {
                res.push([...arr]);
            }
        } else {
            if (isPalindrome(s, previous, i)) {
                arr.push(s.substring(previous, i+1));
                solve(s, i + 1, i + 1);
                arr.pop();
            }

            solve(s, i + 1, previous);
        }
    }

    solve(s, 0, 0);
    return res;
};