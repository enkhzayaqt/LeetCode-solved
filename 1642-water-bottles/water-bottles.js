/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let res = numBottles;

    while(numBottles / numExchange > 0){
        let n = Math.floor(numBottles / numExchange)
        res += n;

        if(numBottles > numExchange){
            numBottles = n + (numBottles % numExchange);
        }else {
            numBottles = n;
        }
        
    }
    return res
};