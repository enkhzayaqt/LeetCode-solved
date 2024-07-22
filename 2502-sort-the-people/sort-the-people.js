/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {    
    for (let i = 0; i < names.length - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < names.length; j++) {
            if (heights[j] > heights[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            // Swap the elements
            let temp = heights[i];
            let tempName = names[i];
            heights[i] = heights[minIndex];
            names[i] = names[minIndex];
            heights[minIndex] = temp;
            names[minIndex] = tempName;
        }
    }
    return names;
};