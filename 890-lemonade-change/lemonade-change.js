/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fiveDollar = 0;
    let tenDollar = 0;

    for(let bill of bills){
        // if its 5 just increment change obj
        if(bill === 5){
            fiveDollar++;

        // if its 10, check change and increment bill
        }else if(bill === 10){
            if(fiveDollar > 0){
                fiveDollar--;
                tenDollar++;
            }else {
                return false;
            }
        // if it's 20, check change, doesn't need to increment
        }else {
            if(fiveDollar > 0 && tenDollar > 0){
                fiveDollar -= 1;
                tenDollar -= 1;
            }else if(fiveDollar > 2){
                fiveDollar -= 3;
            }else {
                return false;
            }
        }
    }
    return true;
};