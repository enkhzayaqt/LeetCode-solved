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
var reverseList = function(head) {
    // if no head return head
    // using while loop put them all into new array
    // using built in reverse method to reverse array
    // create new linked list
    // reverse loop through the array and create node
    // head to next
    if(!head) return head;
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    arr.reverse();

    let newList = new ListNode(arr[0]);
    let temp = newList;
    for(let i = 1; i < arr.length; i++){
        let node = new ListNode(arr[i]);
        temp.next = node;
        temp = temp.next;
    }
    return newList
};