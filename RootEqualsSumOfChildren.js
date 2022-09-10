/* You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, 
and its right child.
Return true if the value of the root is equal to the sum of the values of its two children, 
or false otherwise */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var checkTree = root => {
    return root.val === root.right.val + root.left.val
}

console.log(checkTree[10,4,6])