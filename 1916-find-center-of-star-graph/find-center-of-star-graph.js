/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let a = edges[0][0];
    let b = edges[0][1];

    if(edges.every((element) => element.includes(a))) return a;
    if(edges.every((element) => element.includes(b))) return b;
};