/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} edges
 * @return {number}
 */
var maximumValueSum = function(nums, k, edges) {

    // Compute the net change for each node when XORed with k
    const netChange = nums.map(num => (num ^ k) - num);

    // Initial sum of the node values
    let nodeSum = nums.reduce((acc, num) => acc + num, 0);

    // Sort netChange in descending order
    netChange.sort((a, b) => b - a);

    // Add positive pair sums to the nodeSum
    for (let i = 0; i < nums.length; i += 2) {
        if (i + 1 === nums.length) break; 
        const pairSum = netChange[i] + netChange[i + 1];
        if (pairSum > 0) {
            nodeSum += pairSum;
        }
    }

    return nodeSum;
};