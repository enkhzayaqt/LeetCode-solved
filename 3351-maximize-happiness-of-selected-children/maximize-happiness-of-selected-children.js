/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    // sort the array;
    // pick k number of max kids and before saving them into maxArr reduce by i times;
    let i = 1; 
    let sorted = happiness.sort((a,b) => b-a);
    let max = sorted[0];
    while(i < k){
        if((sorted[i] - i) > 0) max += (sorted[i] - i);
        i++;
    }
    return max;
};