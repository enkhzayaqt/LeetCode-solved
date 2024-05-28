/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const dfs = (node, arr) => {
    if(node === null) return arr;

    dfs(node.left, arr)
    arr.push(node.val);
    dfs(node.right, arr);
}

var inorderTraversal = function(root) {
    let arr = [];
    dfs(root, arr);
    return arr;
};