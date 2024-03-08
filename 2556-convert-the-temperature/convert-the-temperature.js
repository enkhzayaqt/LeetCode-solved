/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    const ans = [];
    ans.push(celsius + 273.15);
    ans.push(celsius * 1.80 + 32.00 );
    return ans;
};