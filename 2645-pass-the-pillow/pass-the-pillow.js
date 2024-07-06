/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    if(time < n) return time + 1;
    if(time === n) return n - 1;

    let direction = true;
    let people = 1;
    for(let i = 0; i < time; i++){
        if (people === n) {
            direction = false; 
        } else if (people === 1) {
            direction = true; 
        }

        if(direction && people < n) {
            people++;
        }else {
            people--;
        }
    }
    return people;
};