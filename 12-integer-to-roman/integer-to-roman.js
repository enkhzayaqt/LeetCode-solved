/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let arr = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90], 
        ["L", 50], 
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ]
    let res = '';
    for(let i = 0; i < arr.length; i++){
        let val = arr[i][1];
        let sym = arr[i][0];
        if((num / val) >= 1){
            let count = Math.floor(num / val);
            for(let i = 0; i < count; i++){
                res += sym;
            }
            num = num % val;
        }
    }
    return res;
};