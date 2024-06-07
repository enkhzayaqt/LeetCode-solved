/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    // separate sentence by space, split();
    // create variable to content result sentence, str;
    // loop through splitted sentence;
    let sentenceArr = sentence.split(' ');
    let resArr = [];
    for(let word of sentenceArr){
        let searchWord = ''
        for(let char of word){
            searchWord += char;
            if(dictionary.includes(searchWord)){
                // resArr.push(searchWord);
                break;
            }else continue;
        }
        resArr.push(searchWord)
    }
    return resArr.join(' ')
};