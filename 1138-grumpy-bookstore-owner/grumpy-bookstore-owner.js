/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    // findind initial satisfied customers;
    let satisfied = 0;
    for(let i = 0; i < grumpy.length; i++){
        if(grumpy[i] == 0){
            satisfied += customers[i];
        }
    }

    let extraSatisfied = 0;
    // finding first options extra
    for(let i=0; i < minutes; i++){
        if(grumpy[i] == 1){
            extraSatisfied += customers[i]
        }
    }

    let maxOfExtra = extraSatisfied;
    // checking all the other options;
    for(let i = minutes; i < customers.length; i++){
        if(grumpy[i - minutes] == 1){
            extraSatisfied -= customers[i - minutes];    
        }
        if(grumpy[i] == 1){
            extraSatisfied += customers[i];
        }
        maxOfExtra = Math.max(maxOfExtra, extraSatisfied);
    }
    return satisfied + maxOfExtra;
};