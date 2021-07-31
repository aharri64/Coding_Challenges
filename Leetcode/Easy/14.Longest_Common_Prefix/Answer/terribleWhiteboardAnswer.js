/*
https://www.youtube.com/watch?v=g5kH8EX4l-U

sampleArray =[flower, fly, flame]


*/
/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 1. Create a variable called longest
    let longest = '';

    // 2. what if it is an empty array?
    if (strs.length === 0) {
        return longest;
    }

    // 3. separate first variable in array
    let comparisonWord = strs[0];
    // 4. keep track of which index we're on.
    let comparisonIndex = 0;

    // 5. Loop over every letter in the comparison word
    for (let comparisonLetter of comparisonWord) {
        // 6. get to the other words
        for (let i = 1; i < strs.length; i++) {
            let currentWord = strs[i];
            // 7. Get a reference to the current letter of the current word
            let currentLetter = currentWord.charAt(comparisonIndex);

            // 8. Now we will do our comparisons
            if (comparisonLetter !== currentLetter || comparisonIndex > currentWord.length) {
                return longest;
            }
        }
        comparisonIndex++;
        longest += comparisonLetter;
    }
    return longest
};