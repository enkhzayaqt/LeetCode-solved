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
 * @return {number}
 */
var sumNumbers = function(root) {

    const dfs = (cur, num) => {
        if(cur == null) return 0;
        if(!cur.left && !cur.right){
            return num * 10 + cur.val;
        }
        return dfs(cur.left, num * 10 + cur.val) + dfs(cur.right, num * 10 + cur.val)
    }
    return dfs(root, 0)
};