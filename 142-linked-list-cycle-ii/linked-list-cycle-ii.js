/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head;
    let slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            let start = head;
            while(start !== slow){
                start = start.next;
                slow = slow.next;
            }
            return start;
        }
    }
    return null;
};