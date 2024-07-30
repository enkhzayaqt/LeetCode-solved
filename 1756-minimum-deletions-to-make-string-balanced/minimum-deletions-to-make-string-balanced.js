/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let deletions = 0;
    let count = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'b'){
            count++;
        }else if(count > 0){
            deletions++;
            count--;
        }
    }
    return deletions;
};