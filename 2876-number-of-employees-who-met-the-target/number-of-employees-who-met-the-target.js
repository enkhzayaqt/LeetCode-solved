/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
function numberOfEmployeesWhoMetTarget (hours, target) {
    // create counter to count
    let counter = 0;
    // loop array to check if it's greater than or equel to 
    for(let i = 0; i < hours.length; i++){
        if(hours[i] >= target){
            // if so, increase counter
            counter++;
        }
    }
    // return counter
    return counter;
};