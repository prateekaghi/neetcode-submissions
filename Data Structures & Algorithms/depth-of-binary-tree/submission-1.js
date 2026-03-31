/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root) {
        if(!root)return 0
        
        function checkDepth(node){
            if(!node)return 0
            const left=checkDepth(node.left)
            const right=checkDepth(node.right)
            console.log(node.val,left,right)
            return 1 + Math.max(left,right)
        }
        return checkDepth(root)

    }
}
