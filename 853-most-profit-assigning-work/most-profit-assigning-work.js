/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let maxProfit = 0;
    let maxOfWorker = 0;

    for(let man of worker){
        
        for(let i = 0; i < difficulty.length; i++){
            if(difficulty[i] <= man){
                maxOfWorker = Math.max(profit[i], maxOfWorker)
            }
        }

        maxProfit += maxOfWorker;
        maxOfWorker = 0
    }
    return maxProfit;
};