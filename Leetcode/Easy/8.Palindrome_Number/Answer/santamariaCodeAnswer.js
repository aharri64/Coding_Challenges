/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = (x) => {
// METHOD 1
//     let reversed = x.toString().split('').reverse().join();
//     return (x.toString() === reversed)

// METHOD 2
    let reversedStr = '';
    let xStr = x.toString()

    for (let i of xStr) {
        reversedStr = i + reversedStr
    }
    return(reversedStr === xStr)

};

isPalindrome(343);