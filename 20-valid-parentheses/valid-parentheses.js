/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 != 0) return false;
    const obj = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    let stack = [];

    for(let i = 0; i < s.length; i++){
        if(s[i] in obj){
            stack.push(s[i])
        } else {
            if(!stack.length || obj[stack.pop()] !== s[i]){
                return false;
            }
        }
    }
    return stack.length == 0
};  