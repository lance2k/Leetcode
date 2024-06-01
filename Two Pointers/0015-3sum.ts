/**
 * Finds all unique triplets in the array which gives the sum of zero.
 * @param nums An array of integers.
 * @returns An array of arrays, each containing three integers that add up to zero.
 * @description This function sorts the array and then uses a two-pointer technique to find all unique triplets that sum up to zero. It ensures no duplicates by skipping over repeated elements.
 *
 * @example
 * ```typescript
 * const result = threeSum([-1, 0, 1, 2, -1, -4]);
 * console.log(result); // Output: [[-1, -1, 2], [-1, 0, 1]]
 * ```
 *
 * @complexity
 * Time Complexity: O(n^2) - The function sorts the array in O(n log n) time and uses a nested loop to find the triplets, leading to an overall time complexity of O(n^2).
 * Space Complexity: O(n) - The space complexity is primarily due to the space required to store the result array and the space used by the sorting algorithm.
 */
function threeSum(nums: number[]): number[][] {
	const res: number[][] = [];
	nums.sort((a, b) => a - b); // Sorting the array

	for (const [index, value] of nums.entries()) {
		// Skip repeated elements
		if (index > 0 && nums[index - 1] === value) {
			continue;
		}
		let l = index + 1;
		let r = nums.length - 1;
		while (l < r) {
			const threeSum = value + nums[l] + nums[r];
			if (threeSum > 0) {
				r--;
			} else if (threeSum < 0) {
				l++;
			} else {
				res.push([value, nums[l], nums[r]]);
				l++;
				// Skip repeated elements at the left pointer
				while (nums[l - 1] === nums[l] && l < r) {
					l++;
				}
			}
		}
	}
	return res;
}