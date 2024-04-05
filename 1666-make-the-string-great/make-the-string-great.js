/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    // put s in array;
    // check : by loop with toUpperCase();
    // remove : by splice
    // start over: set i to 0
    // make arr to string
    // return string
    let arr = s.split('');
    let i = 0
    while(i < arr.length-1){
        if(arr[i] && arr[i+1] && arr[i].toUpperCase() == arr[i+1].toUpperCase() && arr[i] !== arr[i + 1]) {
            arr.splice(i,2);
            i--;
            continue;
        }
        i++
    }
    return arr.join('');
};