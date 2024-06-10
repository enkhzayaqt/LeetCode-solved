/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    // sort the heights array 
    // compare sorted heights and given heights
    // count indices where heights[i] != expected[i];
    let expected = [...heights];
    expected.sort((a,b) => a-b);

    let count = 0;

    for(let i in heights){
        if(heights[i] != expected[i]) count++;
    }
    return count;
};