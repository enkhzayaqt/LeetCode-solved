/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */
var createBinaryTree = function(descriptions) {
    let nodes = {};
    let children = new Set();

    for (let [parent, child, isLeft] of descriptions) {
        if (!(parent in nodes)) {
            nodes[parent] = new TreeNode(parent);
        }

        if (!(child in nodes)) {
            nodes[child] = new TreeNode(child);
        }

        if (isLeft === 1) {
            nodes[parent].left = nodes[child];
        } else {
            nodes[parent].right = nodes[child];
        }

        children.add(child);
    }

    let root = null;
    for (let [parent, , ] of descriptions) {
        if (!children.has(parent)) {
            root = nodes[parent];
            break;
        }
    }

    return root;
};