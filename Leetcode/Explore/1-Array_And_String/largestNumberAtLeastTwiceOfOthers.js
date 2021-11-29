/**
 * @param {number[]} nums
 * @return {number}
 */
 var dominantIndex = function(nums) {
    let largestIndex = 0,
        largestNumber = 0,
        totalSum = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        if (largestNumber < nums[i]) {
            largestIndex = i;
            largestNumber = nums[i];
        }
    }
    
    for (let i = 0; i <nums.length; i++) {
        let product = nums[i] * 2
        if (largestIndex === i){
            console.log('skip');
        } else if (largestNumber < product){
            return -1;
        } 
    }
    return largestIndex;
};