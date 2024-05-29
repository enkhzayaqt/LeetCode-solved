/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    // convert binary number to number
    // recursion: 
        // base case: if number is equal to 1 return
        // recursive case: update number
            // if number is even divide by 2
            // if odd add 1;
            // track the count;
    let count = 0;
    let carry = 0;

    for(let i = s.length-1; i >= 1; i--){
        let digit = ((s.charAt(i).charCodeAt(0) - '0'.charCodeAt(0)) + carry) %2
        
        if(digit == 0) {
            count++;
        }else {
            carry = 1;
            count += 2;
        }

    }

    return count + carry;

};