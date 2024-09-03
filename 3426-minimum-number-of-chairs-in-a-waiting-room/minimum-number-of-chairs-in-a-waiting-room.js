/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let res = 0;
    let e = 0;
    let l = 0;
    for(let chair of s){
        if(chair == "E"){
            e++;
        }else {
            l++;
        }
        res = Math.max(e-l, res);
    }
    return res;
};