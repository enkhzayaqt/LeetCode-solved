/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    let resArr = [];
    let deqeue = [];
    let len = deck.length;
    deck = deck.sort((a,b)=>b-a);
    deqeue.push(deck[0]);
    for(let i = 1; i < len; i++){
        let temp = deqeue.pop();
        deqeue.unshift(temp);
        deqeue.unshift(deck[i]);
    }

    while(deqeue.length > 0){
        resArr.push(deqeue.shift())
    };
    return resArr;
};