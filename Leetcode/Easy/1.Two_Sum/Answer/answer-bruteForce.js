/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (arr, target) => {
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push(i);
				result.push(j);
			}
		}
	}
	return result;
}