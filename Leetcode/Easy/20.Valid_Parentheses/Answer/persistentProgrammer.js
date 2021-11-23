//https://www.youtube.com/watch?v=zZ4nrY0uWeA

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    // need to create an object to reference
    // need to create a heap
    // iterate through 
    // compare with reference
    
    if(s == ""){
        return true;
    }
    
    if(s.length < 2) {
        return false;
    }
    
    let brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    let heap = [];
    let arr = s.toString().split("");
    
    for(let i=0; i<arr.length; i++){
        let br = arr[i];
        if(brackets[br]){
            heap.push(br);
        } else {
            let checkBrackets = heap.pop();
            if(brackets[checkBrackets] != br) {
                return false
            }
        }
    }
    
    if(heap.length > 0){
        return false;
    }
    return true;
};