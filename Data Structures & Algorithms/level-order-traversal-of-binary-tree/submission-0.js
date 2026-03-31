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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(!root)return []
        const output=[]
        const queue=[]
        queue.push(root)
        while(queue.length>0){
            const level=queue.length
            const currentLevel=[]
            for(let i=0;i<level;i++){
                const top=queue.shift()
                currentLevel.push(top.val)
                if(top.left)queue.push(top.left)
                if(top.right)queue.push(top.right)
            }
            output.push(currentLevel)
        }
        return output
    }
}
