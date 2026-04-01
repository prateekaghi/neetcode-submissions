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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count=0
        let result=null
        function traverse(node){
            if(!node || result!==null)return 
            traverse(node.left)
            count++
            if(count===k){
                result=node.val
                return 
            }
            traverse(node.right)

        }
        traverse(root)
        return result
    }
}
