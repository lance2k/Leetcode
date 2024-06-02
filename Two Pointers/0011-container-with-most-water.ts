/**
 * Calculates the maximum area of water that can be contained by any two lines in the given height array.
 * @param height An array of integers representing the height of lines.
 * @returns The maximum area of water that can be contained.
 * @description This function uses a brute-force approach to calculate the maximum area by checking the area for every possible pair of lines.
 *
 * @example
 * ```typescript
 * const result = maxArea([1,8,6,2,5,4,8,3,7]);
 * console.log(result); // Output: 49
 * ```
 *
 * @complexity
 * Time Complexity: O(n^2) - The function uses a nested loop to check the area for every possible pair of lines, resulting in O(n^2) time complexity.
 * Space Complexity: O(1) - The space complexity is constant as no additional space is used that scales with the input size.
 */
function maxArea(height: number[]): number {
	let maxArea = 0;

	for (let l = 0; l < height.length; l++) {
		for (let r = l + 1; r < height.length; r++) {
			const area = (r - l) * Math.min(height[l], height[r]);
			maxArea = Math.max(maxArea, area);
		}
	}
	return maxArea;
}

/**
 * Calculates the maximum area of water that can be contained by any two lines in the given height array.
 * @param height An array of integers representing the height of lines.
 * @returns The maximum area of water that can be contained.
 * @description This function uses a two-pointer technique to calculate the maximum area in a more efficient manner.
 *
 * @example
 * ```typescript
 * const result = maxArea2([1,8,6,2,5,4,8,3,7]);
 * console.log(result); // Output: 49
 * ```
 *
 * @complexity
 * Time Complexity: O(n) - The function uses a two-pointer technique that reduces the number of calculations to linear time, O(n).
 * Space Complexity: O(1) - The space complexity is constant as no additional space is used that scales with the input size.
 */
function maxArea2(height: number[]): number {
	let maxArea = 0;
	let l = 0;
	let r = height.length - 1;

	while (l < r) {
		const area = (r - l) * Math.min(height[l], height[r]);
		maxArea = Math.max(maxArea, area);

		if (height[l] < height[r]) {
			l++;
		} else {
			r--;
		}
	}

	return maxArea;
}