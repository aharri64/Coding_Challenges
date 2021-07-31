/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const converted = []
    romanNumerals = s.split('')
    for (var i = 0; i < s.length; i++) {
        if (i === "I") {
            i = 1
        }
    }
};