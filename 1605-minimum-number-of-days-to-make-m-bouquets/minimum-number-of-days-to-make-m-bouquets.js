/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    if((m * k) > bloomDay.length) return -1;
   
    const helper = (days) => {
        let bouquets = 0;
        let flowers = 0;
        
        for (let bloom of bloomDay) {
            if (bloom <= days) {
                flowers++;
                if (flowers == k) {
                    bouquets++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
        }
        
        return bouquets >= m;
    };

    let left = Math.min(...bloomDay);
    let right = Math.max(...bloomDay);
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (helper(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};