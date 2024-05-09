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
    let maxArr = [happiness[0]];
    while(i < k){
        if((happiness[i] - i) > 0) maxArr.push(happiness[i] - i);
        i++;
    }
    return maxArr.reduce((acc, cur) => acc + cur, 0);
};