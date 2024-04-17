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
 * @return {string}
 */
var smallestFromLeaf = function(root) {
    let res = '';

    const dfs =(node, path)=>{
        if(!node) return;
        let char = String.fromCharCode(node.val + 97);
        path = char + path;

        if(!node.left && !node.right){
            if(!res || path < res){
                res = path
            }
        }
        dfs(node.left, path);
        dfs(node.right, path);
    }
    dfs(root, '');
    return res;
};