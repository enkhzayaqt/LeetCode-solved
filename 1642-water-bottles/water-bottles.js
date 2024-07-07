/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;

    while(numBottles >= numExchange){
        let n = Math.floor(numBottles / numExchange)
        res += n;
        numBottles = n + (numBottles % numExchange);  
    }
    return res
};