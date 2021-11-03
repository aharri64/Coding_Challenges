/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function (x) {
    // Method 1
    // we're going to do this with math

    if(x < 0) return false;
    let reverse = 0;

    for (let i = x; i >= 1; i = Math.floor(i/10)) reverse = reverse * 10 + i % 10;

    return reversed === x;

};