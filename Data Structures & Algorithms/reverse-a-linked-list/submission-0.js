/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        function traverse(node,prev){
            if(!node)return prev
            const nextNode=node.next
            node.next=prev

            return traverse(nextNode,node)
            
        }
        return traverse(head,null)
    }
}
