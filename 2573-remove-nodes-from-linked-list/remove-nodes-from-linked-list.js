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
var removeNodes = function(head) {
    let cur = head;
    let arr = [];
    while(cur !== null){
        while(arr.length > 0 && arr[arr.length-1].val < cur.val){
            arr.pop();
        }
        arr.push(cur);
        cur = cur.next;
    }

    let next = null;
    while(arr.length>0){
        cur = arr.pop();
        cur.next = next;
        next = cur;
    }
    return cur;
};