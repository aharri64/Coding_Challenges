/**
 * @param {string} s
 * @return {boolean}
 * https://www.youtube.com/watch?v=u5yBuKJ7bE4
 */
 var isValid = function(s) {
    // Make the reference object
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}
    }

    //create the heap
    let heap = [];

    //iterate through iterate
    for(let char of s){
        if(bracket[char]){
            heap.push(bracket[char])
        }else{
            if(heap.pop() !== char) return false
        }
    }

    return (!heap.length)
};