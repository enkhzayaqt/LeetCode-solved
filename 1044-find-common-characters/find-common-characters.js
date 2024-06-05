/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let arr = new Array(26).fill(Infinity);

    for (let word of words) {
        let count = new Array(26).fill(0);

        for (let char of word) {
            count[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for (let i = 0; i < 26; i++) {
            arr[i] = Math.min(arr[i], count[i]);
        }
    }

    let res = [];

    for (let i = 0; i < 26; i++) {
        while (arr[i] > 0) {
            res.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
            arr[i]--;
        }
    }

    return res;
};