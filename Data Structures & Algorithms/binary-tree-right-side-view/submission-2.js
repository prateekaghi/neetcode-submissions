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
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root)return []
        let result=[]


        function dfs(root,depth){
            if(!root)return null
            if(depth===result.length){
                result.push(root.val)
            }
            if(root.right){
                dfs(root.right,depth+1)
            }
            if(root.left){
                dfs(root.left,depth+1)
            }

        }
        dfs(root,0)
        return result
    }
}
