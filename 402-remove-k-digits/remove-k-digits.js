/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
    // edge case:
    if(num.length == k) return '0';

    let stack = [];
    for(let n of num){
        while(k > 0 && stack.length && stack[stack.length-1] > n){
            k--;
            stack.pop();
        }
        if(stack.length == 0 && n == '0') continue
        stack.push(n);
    }
    while(k > 0 && stack.length > 0){
        k--;
        stack.pop();
    }
    return stack.length == 0 ? '0' : stack.join('');
};