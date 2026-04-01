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
    goodNodes(root) {
        let goodNodes=0
        let maxSoFar=-Infinity


        function traverse(node,max){
            if(!node)return 
            if(node.val>=max){
                goodNodes++
            }
            traverse(node.left,Math.max(max,node.val))
            traverse(node.right,Math.max(max,node.val))

        }
        traverse(root,maxSoFar)
        return goodNodes
    }
}
