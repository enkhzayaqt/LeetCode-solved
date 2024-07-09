/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let time = customers[0][0] + customers[0][1];
    let arr = [];
    arr.push(time - customers[0][0]);

    for(let i = 1; i < customers.length; i++){
        if(time >= customers[i][0]){
            time += customers[i][1];
            arr.push(time - customers[i][0]);
        }else {
            time = customers[i][0] + customers[i][1];
            arr.push(time - customers[i][0]);
        }
    }
    let sum = arr.reduce((acc, cur)=> acc + cur,0);
    return sum / arr.length
};