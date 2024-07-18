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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    if (!root) return [];

    let set = new Set(to_delete);
    let res = [];
    let arr = [root];

    while (arr.length > 0) {
        let curNode = arr.shift();

        if (curNode.left) {
            arr.push(curNode.left);
            if (set.has(curNode.left.val)) {
                curNode.left = null;
            }
        }

        if (curNode.right) {
            arr.push(curNode.right);
            if (set.has(curNode.right.val)) {
                curNode.right = null;
            }
        }

        if (set.has(curNode.val)) {
            if (curNode.left) {
                res.push(curNode.left);
            }
            if (curNode.right) {
                res.push(curNode.right);
            }
        } else if (res.length === 0) {
            res.push(curNode);
        }
    }

    return res;
};