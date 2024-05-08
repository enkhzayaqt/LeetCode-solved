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
var doubleIt = function(head) {
     const helper = function(head) {
        if (!head) {
            return 0;
        }
        var double = head.val * 2 + helper(head.next);
        head.val = double % 10;
        return Math.floor(double / 10);
    };

    var carry = helper(head);
    if (carry > 0) {
        head = new ListNode(carry, head);
    }
    return head;
};