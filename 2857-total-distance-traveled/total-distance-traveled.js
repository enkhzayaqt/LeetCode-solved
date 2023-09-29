/**
 * @param {number} mainTank
 * @param {number} additionalTank
 * @return {number}
 */
var distanceTraveled = function(mainTank, additionalTank) {
    if(mainTank < 5) return mainTank * 10;
    // return (mainTank + Math.floor(mainTank / 5) ) * 10;
    let counter = 0;
    while(mainTank > 0){
        if(mainTank < 5){
            counter += mainTank;
            mainTank = 0;
        }else {
            counter += 5;
            if(additionalTank > 0){
                mainTank -= 4;
                additionalTank -= 1;
            }else {
                mainTank -= 5;
            }
        }
    }
    return counter * 10;
};