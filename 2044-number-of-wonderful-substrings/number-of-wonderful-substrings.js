/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function(word) {
    let mask = 0;
    let prefixSum = new Array(1024).fill(0); 
    prefixSum[0] = 1; 
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        let charIndex = word.charCodeAt(i) - 97; 
        mask ^= 1 << charIndex;

        count += prefixSum[mask];

        for (let j = 0; j < 10; j++) {
            let newMask = mask ^ (1 << j);
            count += prefixSum[newMask];
        }

        prefixSum[mask]++;
    }
    return count;
};