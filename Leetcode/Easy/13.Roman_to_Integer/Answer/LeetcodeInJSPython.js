// https://www.youtube.com/watch?v=GckopcP8lfo
/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;
    let previous = 0;
    
    for(let i = 0; i < s.length; i++){
        let num = map[s[i]];
        if (num > previous){
            result += num - 2 * previous
        } else {
            result += num
        }
        
        previous = num
    }
    
    return result
};