// https://www.youtube.com/watch?v=gJOgI8TpSgc

/* Horizontal Method
Compare each word letter by letter index

Vertical method, compares all the words at once
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    
    //  prefix = ''
    //      Loop through strs (str)
    //          If str[index] != char
    //              return prefix     
    //      prefix = prefix = char
    //  return prefix
        
    let prefix = '';
    if (strs.length === 0) return prefix;
    for (let i = 0; i < strs[0].length; i++){
        const character = strs[0][i]
        for (let j = 0; j < strs.length; j++){
            if (strs[j][i] != character) return prefix
        }
        prefix = prefix + character
    }
    return prefix
};