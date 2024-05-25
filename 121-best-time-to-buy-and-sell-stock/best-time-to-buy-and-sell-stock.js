/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitBruteForce = function(prices) {
    // iterate through nested loop;
    let max = 0;
    for(let i = 0; i < prices.length; i++){
        for(let j = i+1; j < prices.length; j++){
            let dif = prices[j] - prices[i];
            max = Math.max(max, dif);
        }
    }
    return max;

    // find abs difference and put that into new array
    // return max from array;

    // time: O(n2);
    // space: 0(1);
};

var maxProfit = function(prices) {
    // keep track min value;
    // compare in loop;
    // if it's bigger keep max difference;
    // if it's less update min value;
    // return max difference
    let min = prices[0];
    let maxDiff = 0;
    for(let price of prices){
        if(price > min){
            maxDiff = Math.max(maxDiff, (price - min));
        }else {
            min = price;
        }
    }
    return maxDiff
}