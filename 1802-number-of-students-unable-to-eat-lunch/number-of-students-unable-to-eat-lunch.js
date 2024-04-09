/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let res = students.length;
    let obj = {};
    for(let student of students){
        if(obj[student] == undefined){
            obj[student] =1;
        }else obj[student]++;
    }
    for(let sandwich of sandwiches){
        if(obj[sandwich] >= 1){
            obj[sandwich]-=1;
            res-=1;
        }else break
    }
    return res;
};