/**
 * @param {number[][]} nums
 * @return {number}
 */
function diagonalPrime(nums) {
    function isPrime(num){
        if(num <= 1) return false;
        for(let i = 2; i<num; i++){
            if(num % i == 0){
            return false;
            }
        }
        return true;
    }

    let len = nums.length-1;
    let res = 0;

    for(let i = 0; i <= len; i++){
        let num1 = nums[i][i];
        let num2 = nums[i][len - i];
        if(num1 > res && isPrime(num1)){
            res = num1;
        };
        if(num2 > res && isPrime(num2)){
            res = num2;
        };
    }
    return res;
};

