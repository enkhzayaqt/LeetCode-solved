/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    let dummy = new ListNode(0);  
    let cur = dummy;
    let sum = 0;
    let node = head.next;  

    while (node !== null) {
        if (node.val === 0) {
        if (sum > 0) {
            cur.next = new ListNode(sum);
            cur = cur.next;
            sum = 0;  
        }
        } else {
            sum += node.val;
        }
        node = node.next;
    }

  return dummy.next;
};