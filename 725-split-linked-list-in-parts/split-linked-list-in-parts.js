/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let len = 0;
    let cur = head;
    while (cur) {
        len++;
        cur = cur.next;
    }

    let partSize = Math.floor(len / k);
    let extraNodes = len % k; 
    let parts = [];
    cur = head;
    for (let i = 0; i < k; i++) {
        let partHead = cur;
        let partTail = null;
        let currentPartSize = partSize + (i < extraNodes ? 1 : 0);
        for (let j = 0; j < currentPartSize; j++) {
            partTail = cur;
            cur = cur.next;
        }
        if (partTail) partTail.next = null;
        parts.push(partHead);
    }

    return parts;
};