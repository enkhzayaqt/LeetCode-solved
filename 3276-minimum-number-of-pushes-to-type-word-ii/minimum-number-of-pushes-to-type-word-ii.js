/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    // edge case: if word has 8 or fewer distinct characters;
    let set = new Set(word)
    if(set.size <= 8) return word.length;

    // count frequency of the each character;
    let freq = Array(26).fill(0);
    for(let char of word){
        freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // sort;
    freq.sort((a,b) => b-a);

    let pushes = 0;
    for(let i = 0; i < 26; i++){
        if(freq[i] > 0){
            let press = Math.floor(i/8) + 1;
            pushes += freq[i] * press
        }
    }
    return pushes;
    // time: O(n);
    // space: O(1)
};