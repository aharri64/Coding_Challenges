// from https://www.youtube.com/watch?v=gnwFjlUXN1o

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {// so basically, if x = 0... return false
        return false;
    }
    return x === reversedInteger(x);
};

var reversedInteger = function (x) {
    let reversed = 0;
    //we are going to slower transform that number and chop off the last digit and give it to reversed

    while (x > 0) { //we stop only when x = 0
        reversed = (reversed * 10) + (x % 10);
        //chop off the last number of the x you're Given
        x = Math.floor(x / 10); //example 49... 49/10 = 4.9... round down to 4
    }

    return reversed;
};