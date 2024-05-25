/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    // define helper function to perform DFS to generate possible sentences
    // use memoization to store result;
    // break down the string
    // combine the result;
    let set = new Set(wordDict);
    let memo = new Map();

    function dfs(start) {
        // If we have already computed the result for this starting index, return it
        if (memo.has(start)) return memo.get(start);
        
        // Initialize the result array for this starting index
        let result = [];
        
        // If we have reached the end of the string, return an array with an empty string
        if (start === s.length) {
            result.push("");
        } else {
            // Iterate through the string starting from 'start' to the end
            for (let end = start + 1; end <= s.length; end++) {
                // Get the current substring
                const word = s.slice(start, end);
                
                // Check if the current substring is a valid word
                if (set.has(word)) {
                    // Get the result of the remaining substring
                    const sublist = dfs(end);
                    
                    // Combine the current word with the results of the remaining substring
                    for (let sub of sublist) {
                        result.push(word + (sub ? " " + sub : ""));
                    }
                }
            }
        }
        
        // Store the result in memoization map
        memo.set(start, result);
        return result;
    }

    // Start the DFS from the beginning of the string
    return dfs(0);
};