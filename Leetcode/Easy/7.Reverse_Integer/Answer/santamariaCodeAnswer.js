/*
 * @param {number} x
 * @return {number}
*/
var reverse = (x) => {
    const limit = 2**31;
    const negativeTest = x < 0 ? x * -1 : 1;
    
    x = x.toString()
    

    let result= ''
    // 123
    for (let i of x) {
        result = i + result
        //1 + ""
        //2 + 1 = 21
        //3 + 21 = 321
        
        result = parseInt(result)
        return result > limit ? 0 : result * negativeTest
    }
};

// didn't work, why?