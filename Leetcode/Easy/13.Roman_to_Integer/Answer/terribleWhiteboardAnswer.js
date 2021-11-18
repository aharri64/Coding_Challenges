/*
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 1. creat a map to map out every individual roman numeral
    let romanToInt = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    // 2. Keep track of our total
    let total = 0;

    // 3. Then we need to loop over character in our roman numeral
    for (let i = 0; i < s.length; i++) {
        // 4. Capture our current integer and the next integer
        let currentInt = romanToInt[s.charAt(i)];
        let nextInt = romanToInt[s.charAt(i + 1)];

        // 9. When we reach then end of our number, we need to end the loop
        if (nextInt) {
            // 5. See if our current integer is greater than or equal to the next integer
            if (currentInt >= nextInt) {
                // 6. If it is, add the total to the current integer
                total += currentInt;
            } else {
                // 7. If the current integer is less than the next integer we must subtract the next int from the current int
                total += (nextInt - currentInt);
                // 8. We must increase our index by 1
                i++;
            }
        } else {
            total += currentInt;
        }

        return total;
    }
};