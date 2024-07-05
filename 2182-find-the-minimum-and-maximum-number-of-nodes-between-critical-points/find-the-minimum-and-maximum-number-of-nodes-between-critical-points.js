/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    // put linked list to array;
    // loop array find minima & maxima, then save their indexes into new array;
    // if array has less than 3 indexes return  [-1,-1];
    // else return min [minDistance, maxDistance] between indexes;
    let arr = [];
    while(head){
        arr.push(head.val);
        head = head.next;
    }
    let idxArr = [];
    for(let i = 1; i < arr.length-1; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
            idxArr.push(i);
        }else if(arr[i] < arr[i-1] && arr[i] < arr[i+1]){
            idxArr.push(i);
        }
    }
    

    if(idxArr.length < 2) return [-1,-1];

    idxArr.sort((a,b)=>a-b);
    let maxDistance = idxArr[idxArr.length-1] - idxArr[0];
    let minDistance = Infinity;

    for (let i = 1; i < idxArr.length; i++) {
        let diff = idxArr[i] - idxArr[i - 1];
        if (diff < minDistance) {
            minDistance = diff;
        }
    }
    return [minDistance, maxDistance]
};