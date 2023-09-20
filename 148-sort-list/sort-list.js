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
var sortList = function(head) {
    // if linked list is empty return linked list
    // put all node val into array
    // sort it with built-in sort function
    // then create new linked list

    if(!head) return head;
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    arr.sort((a,b)=> a - b)
    let newList = new ListNode(arr[0])
    let temp = newList;
    for(let i = 1; i < arr.length; i++){
        let newNode = new ListNode(arr[i])
        temp.next = newNode;
        temp = temp.next
    }
    return newList
};