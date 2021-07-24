/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let original = x;
    let reverse = (x + "").split("").reverse().join("");
    let solution = parseInt(reverse, 10);
    console.log("origin: " + original);
    console.log("Solution: " + solution);
    if (solution === original) {
        console.log("true");
    } else {
        console.log("false");
    }
};

isPalindrome(122);
isPalindrome(121);
isPalindrome(123454321);
isPalindrome(-123454321);