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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        

        function traverse(node){
            if(!node)return 
            let nodeVal=node.val
            if(p.val===nodeVal || q.val===nodeVal)return node
            if(p.val<nodeVal && q.val<nodeVal){
                return traverse(node.left)
            }
            if(p.val>nodeVal && q.val>nodeVal){
                return traverse(node.right)
            }
            if((p.val<nodeVal && q.val>nodeVal) || (p.val>nodeVal && q.val<nodeVal)){
                return node
            }

        }
        return traverse(root)
    }
}
