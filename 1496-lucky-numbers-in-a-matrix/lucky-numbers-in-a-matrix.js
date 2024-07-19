/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    // put row mins in arr;
    // put col maxes in arr;
    // iterate maxes array and if num is not in min arr pop else keep
    // return maxes arr 
    let minArr = [];
    let maxArr = new Array(matrix[0].length).fill(-Infinity);

    for (let i = 0; i < matrix.length; i++) {
        let min = matrix[i][0]; 
        for (let j = 1; j < matrix[i].length; j++) {
            min = Math.min(min, matrix[i][j]);
        }
        minArr.push(min);
    }

    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            maxArr[i] = Math.max(maxArr[i], matrix[j][i]);
        }
    }
    for(let i = 0; i < maxArr.length; i++){
        if(!minArr.includes(maxArr[i])){
            maxArr.splice(i,1);
            i--;  
        }
    }
    return maxArr;
};