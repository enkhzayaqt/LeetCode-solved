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
function middleNode (head) {
    let head1 = head;
    let head2 = head
    let arr = [];
    let i = 0
    while(head1){
        arr.push(head.val)
        head1 = head1.next
    }

    if(arr.length % 2 != 0){
        i = Math.ceil(arr.length / 2);
    } else {
        i = arr.length/2 +1;
    }
    let count = 1;
    while(count < i && head2){
        head2 = head2.next;
        count ++;
    }    
    return head2;
};