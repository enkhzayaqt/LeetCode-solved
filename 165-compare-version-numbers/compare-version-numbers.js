/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    // split into array
    // find which one is longer array
    // loop until longest array's length;
    // parseInt before compare;
    // if ver1 less than ver2 return -1;
    // if ver1 is greater than ver2 return 1;
    // otherwise return 0;
    const ver1 = version1.split('.')
    const ver2 = version2.split('.')
    const len = Math.max(ver1.length, ver2.length);

    for(let i =0; i < len; i++){
        let n1 = parseInt(ver1[i] || 0);
        let n2 = parseInt(ver2[i] || 0);
        if(n1 < n2){
            return -1;
        }else if(n1 > n2){
            return 1;
        }
    }
    return 0;
};