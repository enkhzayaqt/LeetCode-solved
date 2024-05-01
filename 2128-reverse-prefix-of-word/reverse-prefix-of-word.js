/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let arr = word.split('');
    let res = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == ch){
            let firstHalf = arr.splice(0, i+1);
            for(let j = firstHalf.length-1; j>=0; j--){
                res += firstHalf[j];
            }
            break;
        }
    }
    for(e of arr){
        res += e;
    }
    return res;
};