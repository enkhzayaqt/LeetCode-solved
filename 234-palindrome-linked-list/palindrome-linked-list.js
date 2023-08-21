/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // create new array 
    let arr = [];
    // loop linkedlist and put all node into array
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    for(let i = 0, j = arr.length -1; i < j; i++, j--){
        if(arr[i] != arr[j]) return false
    }
    return true;
};