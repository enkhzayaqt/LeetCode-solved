/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    // // aproach #1:
    // // loop will run k times(i < k);
    // // everytime will pick one max of the array(Math.max);
    // // find out that max kid's index(array.indexOf(max));
    // // remove that kid from the array(array.splice(idx,1));
    // // to prevent jump loop array backward;
    // // at the same time everytime all values will be decreased by 1 by loop;
    // // return sum if picked kids(kidsArray.reduce());
    // let maxArr = [];
    // let round = 0;
    // while(round < k){
    //     let max = Math.max(...happiness);
    //     maxArr.push(max);
    //     let idx = happiness.indexOf(max);
    //     happiness.splice(idx, 1);
    //     for(let i = 0; i < happiness.length; i++){
    //         if(happiness[i] > 0) happiness[i] -= 1;
    //     }
    //     round += 1;
    // }
    // return maxArr.reduce((acc, cur) => acc + cur, 0);

    // approach #2:
    // sort the array;
    // pick k number of max kids and before saving them into maxArr reduce by i times;
    
    let i = 1; 
    let sorted = happiness.sort((a,b) => b-a);
    let maxArr = [happiness[0]];
    console.log(maxArr)
    while(i < k){
        if((happiness[i] - i) > 0) maxArr.push(happiness[i] - i);
        i++;
    }
    return maxArr.reduce((acc, cur) => acc + cur, 0);
};