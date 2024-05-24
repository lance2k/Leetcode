/**
 * Finds two indices in the given array `nums` such that their values add up to the `target`.
 *
 * @param nums - An array of numbers.
 * @param target - The target sum.
 * @returns An array containing the indices of the two numbers that add up to the target.
 *          Returns an empty array if no such pair is found.
 *
 * @complexity
 * Time complexity: O(n)
 * Space complexity: O(n)
 *
 * The time complexity is O(n) because we iterate through the array once.
 * The space complexity is O(n) because we store up to n elements in the hashMap.
 */
function twoSum(nums: number[], target: number): number[] {
	let hashMap = new Map<number, number>();

	for (const [index, value] of nums.entries()) {
		const difference = target - value;

		if (hashMap.has(difference)) {
			return [index, hashMap.get(difference)!];
		}
		hashMap.set(value, index);
	}
	return [];
}
