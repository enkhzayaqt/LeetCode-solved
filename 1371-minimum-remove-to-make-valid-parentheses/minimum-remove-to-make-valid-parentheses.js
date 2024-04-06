/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    // create arr by using split();
    // create left and right pointer and counter;
    // loop while left is less than right;
    // left pointer will stay first pointer;
    // remove unvalid parenthese using splice() and increase count;
    // right pointer decrease;
    let arr = s.split('');
    let stack = [];
    for(let i=0; i < arr.length; i++){
        if(arr[i] == "(") {
            stack.push(i);
        }else if(arr[i] == ")"){
            if(stack.length){
                stack.pop();
            }else {
                arr[i] = '';
            }
        }
    }
    for(let j of stack){
        arr[j] = "";
    }

    return arr.join('');
};