/**
 * @param {string[]} words
 * @param {character[]} letters
 * @param {number[]} score
 * @return {number}
 */
var maxScoreWords = function(words, letters, score) {

    // count our letters and put it in the obj;
    let letterCount = {};
    for(let letter of letters){
        if(letterCount[letter] == undefined){
            letterCount[letter] = 1
        }else {
            letterCount[letter]++;
        }
    }

    // helper function to calculate given word's score:
    const wordScore = (word) => {
        let sum = 0;
        for(let char of word){
            let i = char.charCodeAt() - 97;
            sum += score[i];
        }
        return sum;
    }

    // helper function to check if the given word can be formed by given letters;
    const checkWord = (word, letterCount) => {
        let temp = {...letterCount};
        for(let char of word){
            if(!temp[char] || temp[char] <= 0){
                return false;
            }
            temp[char]--;
        }
        return true;
    }

    // helper function to backtrack
    const backTrack = (i, curScore, letterCount) => {
        if(i === words.length) return curScore;

        let max = backTrack(i +1, curScore, letterCount);

        const word = words[i];
        if(checkWord(word, letterCount)){
            for(let char of word){
                letterCount[char]--;
            }

            const newScore = curScore + wordScore(word);
            max = Math.max(max, backTrack(i + 1, newScore, letterCount));

            for(let char of word){
                letterCount[char]++
            }
        }
        return max;
    }
    return backTrack(0,0,letterCount)
};