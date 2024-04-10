/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let timer = 0;
    for(let i = 0; i < tickets.length; i++){
        if(i <= k){
            if(tickets[i] <= tickets[k]){
                timer += tickets[i]
            }else {
                timer += tickets[k]
            }
        }else {
            if(tickets[i] <= tickets[k] - 1){
                timer += tickets[i]
            }else {
                timer += tickets[k] - 1; 
            }
        }
    }
    return timer;
};