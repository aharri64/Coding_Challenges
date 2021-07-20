/*
 * @param {number} x
 * @return {number}
*/
const reverse = (x) => {
    // 1. check if it is a positive number
    if (x < 0) return -1 * reverse(-x);
    // 2. Solving the problem
    const solution = (x + "").split("").reverse().join("");
    // 3. If solution is greater than 2**31
    return (solution > 2 ** 31 - 1) ? 0 : solution;
};


// if 123 = 
// it will split into ["1", "2", "3"]
// then reverse into ["3", "2", "1"]
// then join "321" 