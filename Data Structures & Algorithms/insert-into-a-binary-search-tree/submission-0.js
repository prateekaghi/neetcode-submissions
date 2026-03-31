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
     * @param {number} val
     * @return {TreeNode}
     */
    insertIntoBST(root, val) {
        if(!root){
            return new TreeNode(val)
        }
        function insert(node){
            if(node.val<val){
                node.right ? insert(node.right) : node.right= new TreeNode(val)
            }else if(node.val>val){
                node.left ? insert(node.left) : node.left= new TreeNode(val)
                
            }
        }
        insert(root)
        return root
    }
}
