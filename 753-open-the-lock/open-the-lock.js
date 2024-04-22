/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let visited = new Set(deadends);
    let queue = ['0000'];
    let steps = new Map([['0000', 0]]); 

    while (queue.length > 0) {
        let cur = queue.shift();

        if (cur === target) {
            return steps.get(cur);
        }

        if (visited.has(cur)) {
            continue;
        }

        for (let i = 0; i < 4; i++) {
            let curArr = cur.split('');
            let digit = parseInt(curArr[i]);

            // Turn forward
            curArr[i] = digit === 9 ? '0' : (digit + 1).toString();
            let nextForward = curArr.join('');
            if (!visited.has(nextForward) && !steps.has(nextForward)) {
                queue.push(nextForward);
                steps.set(nextForward, steps.get(cur) + 1);
            }

            // Turn backward
            curArr[i] = digit === 0 ? '9' : (digit - 1).toString();
            let nextBackward = curArr.join('');
            if (!visited.has(nextBackward) && !steps.has(nextBackward)) {
                queue.push(nextBackward);
                steps.set(nextBackward, steps.get(cur) + 1);
            }
        }

        visited.add(cur);
    }

    return -1;
};