//https://leetcode.com/explore/learn/card/array-and-string/201/introduction-to-array/1144/

//Explanation : https://www.youtube.com/watch?v=lIliBTgIGrQ
/**
 * @param {number[]} nums
 * @return {number}
 */
 var pivotIndex = function(nums) {
    let totalSum = 0,
        leftSum = 0
    nums.forEach((e) => {
        totalSum += e
    })
    for (let i=0; i<nums.length; i++){
        if (totalSum - leftSum - nums[i] === leftSum){
            return i
        }
        leftSum += nums[i]
    }
    return -1;
};