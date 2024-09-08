/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort();

    const validWords = new Set();
    validWords.add(""); 

    let longestWord = "";

    for (let word of words) {
        const prefix = word.slice(0, -1);
        if (validWords.has(prefix)) {
            validWords.add(word);
            if (word.length > longestWord.length || (word.length === longestWord.length && word < longestWord)) {
                longestWord = word;
            }
        }
    }

    return longestWord;
};