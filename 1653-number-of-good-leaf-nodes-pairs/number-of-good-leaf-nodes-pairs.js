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
 * @param {number} distance
 * @return {number}
 */
var countPairs = function(root, distance) {
    let count = 0;
    
    function dfs(node) {
        if (!node) return [];
        
        if (!node.left && !node.right) return [0];
        
        let leftDistances = dfs(node.left);
        let rightDistances = dfs(node.right);
        
        for (let leftDist of leftDistances) {
            for (let rightDist of rightDistances) {
                if (leftDist + rightDist + 2 <= distance) {
                    count++;
                }
            }
        }
        
        let allDistances = [];
        for (let leftDist of leftDistances) {
            if (leftDist + 1 < distance) {
                allDistances.push(leftDist + 1);
            }
        }
        
        for (let rightDist of rightDistances) {
            if (rightDist + 1 < distance) {
                allDistances.push(rightDist + 1);
            }
        }
        
        return allDistances;
    }
    
    dfs(root);
    
    return count;
};