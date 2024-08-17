/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    // get all the first numbers from every array;
    // compare them and get min
    let min = arrays[0][0];
    let max = arrays[0][arrays[0].length - 1];
    let res = 0;

    for (let i = 1; i < arrays.length; i++) {
        let localMin = arrays[i][0];
        let localMax = arrays[i][arrays[i].length - 1];

        res = Math.max(res, Math.max(localMax - min, max - localMin));

        min = Math.min(min, localMin);
        max = Math.max(max, localMax);
    }

    return res;
};