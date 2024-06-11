/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
     let resArr = [];
     for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] == arr1[j]){
                resArr.push(arr1[j]);
                arr1.splice(j,1);
                j--;
            }
        }
     }
     if(arr1.length){
        arr1.sort((a,b) => a-b);
        return [...resArr, ...arr1]
     }else return resArr;
};