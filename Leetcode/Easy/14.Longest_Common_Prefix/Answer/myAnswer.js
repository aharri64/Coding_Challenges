/*
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let longest = '';

    if (strs.length === '') {
        return longest;
    }

    let comparisonWord = strs[0];
    let comparisonIndex = 0;

    for (let comparisonLetter of comparisonWord) {
        for (let i = 1; i < strs.length; i++) {
            let currentWord = strs[i];
            let currentLetter = currentWord.charAt(comparisonIndex);

            if (currentLetter !== comparisonLetter || comparisonIndex > currentWord.length) {
                return longest;
            }
        }
        comparisonIndex++;
        longest += comparisonLetter;
    }
    return longest;
};