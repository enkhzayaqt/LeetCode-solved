/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
     let n = Math.ceil(Math.sqrt(c));
     let obj = new Map();
     for(let i = 0; i <= n; i++){
        let num = (i * i);
        if((num + num) == c) return true;
        let diff = c - num;
        if(obj.has(diff)){
            return true;
        }else {
            obj.set(num, true);
        }
     }
     return false;
};