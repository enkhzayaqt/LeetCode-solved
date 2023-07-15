/**
 * @param {string} s
 * @return {number}
 */
function findTheLongestBalancedSubstring (s) {
    // edge cases: 
    // if string length is 1 return 0
    // if string doesn't have 0 return 0

    // using the loop to find 0 

    let zeroes = 0;
    let counter = 0;
    let res = 0;


    if(s.length <= 1 || !s.includes(0)) return res;

    for(let i = 0; i < s.length; i++){
        if(s[i] == "0" && counter == 0){
            zeroes++;
        }else if (s[i] == "0" && counter != 0){
            res = Math.max(res, counter);
            counter = 0;
            zeroes = 0;
            i--;
        }else {
            counter++;
            if(counter >= zeroes) {
                res = Math.max(res, zeroes)
                counter = 0;
                zeroes = 0;
            }
        }
    }
    if(counter != 0) {
        res = Math.max(res, counter);
    }
    
    return res*2
};