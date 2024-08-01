/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let count = 0;
    for(let passenger of details){
        let age = passenger[11] + passenger[12];
        if(age > 60) count++;
    }
    return count;
};