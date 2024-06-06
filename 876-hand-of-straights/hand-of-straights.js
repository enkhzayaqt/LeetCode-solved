/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    // in loop find min value every time, Math.min;
    // splice the min, array.splice(minIdx, 1)
    // from the min find consecutive cards long as groupsize, array.includes;
    // and remove that card too, array.indexOf & array.splice(idx, 1);
    // if can't find return false immediatelly;
    // after the loop, if hand is empty return true otherwise return false;
    if(hand.length % groupSize != 0) return false;
    
    for(let i = 0; i < hand.length; i++){
        let min = Math.min(...hand);
        let minIdx = hand.indexOf(min)
        hand.splice(minIdx, 1);
        i--;
        let tempSize = groupSize;
        while(tempSize > 1){
            min += 1;
            if(hand.includes(min)){
                let nextIdx = hand.indexOf(min);
                hand.splice(nextIdx, 1);
                tempSize--;
            }else {
                return false;
            }
        }
    }
    if(hand.length >= 1){
        return false;
    }else {
        return true;
    }
};