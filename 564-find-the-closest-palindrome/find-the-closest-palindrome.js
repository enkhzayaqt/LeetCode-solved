/**
 * @param {string} n
 * @return {string}
 */
var nearestPalindromic = function(n) {
    const num = BigInt(n);
    const length = n.length;

    if (num <= 10n) {
        return (num - 1n).toString(); // Handles edge cases for very small numbers
    }

    const prefix = BigInt(n.slice(0, Math.ceil(length / 2)));
    const candidates = new Set();

    // 1. Create a smaller palindrome
    candidates.add(createPalindrome(prefix - 1n, length));
    
    // 2. Create the current prefix-based palindrome
    candidates.add(createPalindrome(prefix, length));
    
    // 3. Create a larger palindrome
    candidates.add(createPalindrome(prefix + 1n, length));
    
    // Handle edge cases for numbers like 1000, 10000, etc.
    candidates.add(BigInt('9'.repeat(length - 1)));
    candidates.add(BigInt('1' + '0'.repeat(length - 1) + '1'));

    // Filter out the original number and find the closest palindrome
    candidates.delete(num);

    let closest = null;

    for (const candidate of candidates) {
        if (closest === null || 
            (abs(candidate - num) < abs(closest - num)) || 
            (abs(candidate - num) === abs(closest - num) && candidate < closest)) {
            closest = candidate;
        }
    }

    return closest.toString();
}

function createPalindrome(prefix, length) {
    const prefixStr = prefix.toString();
    const suffix = prefixStr.split('').reverse().join('');
    return BigInt(prefixStr + suffix.slice(length % 2));
}

function abs(bigInt) {
    return bigInt < 0n ? -bigInt : bigInt;
};