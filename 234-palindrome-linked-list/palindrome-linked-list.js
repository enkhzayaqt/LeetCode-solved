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
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    let l = 0;
    let r = arr.length - 1;
    while(l < r){
        if(arr[l] == arr[r]){
            l++;
            r--;
        } else return false
    }
    return true;
};