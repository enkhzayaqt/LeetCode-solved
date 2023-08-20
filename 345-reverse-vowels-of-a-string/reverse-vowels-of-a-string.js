/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // change s into array
    s = s.split('');
    // loop array put all vowels into new array
    let newArr = [];
    let vowels = 'aeiouAEIOU'
    for(let i = 0; i < s.length; i++){
        if (vowels.includes(s[i])){
            newArr.push(s[i]);
        }
    }
    // loop array again and change vowels with vowel array by pop
     for(let i = 0; i < s.length; i++){
        if (vowels.includes(s[i])){
            s[i] = newArr.pop();
        }
    }
    // return array by s;
    return s.join('')
};