/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    if(!root) return [];
    const stack = [root];
    const res = [];

    while(stack.length){
        const node = stack.pop();
        res.unshift(node.val)
        for(let n of node.children){
            stack.push(n);
        }
    }
    return res;
};