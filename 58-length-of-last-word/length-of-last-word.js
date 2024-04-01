/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    let filteredArr = arr.filter(a => a != '');
    return filteredArr[filteredArr.length-1].length;
};