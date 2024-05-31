/**
 * Finds the indices of the two numbers in a sorted array that add up to the target.
 * @param numbers An array of integers sorted in non-decreasing order.
 * @param target The target integer to find the sum for.
 * @returns An array containing the indices of the two numbers, with indices being 1-based.
 * @description This function uses the two-pointer technique to find two numbers in the input array that add up to the target.
 * The array is assumed to be sorted in non-decreasing order. The function returns the indices of the two numbers, incremented by 1
 * to be 1-based as per the problem requirements.
 *
 * Time Complexity: O(n)
 * The function uses a while loop that iterates through the array once, where 'n' is the length of the input array 'numbers'.
 * Each element in the array is checked at most once, either moving the left pointer or the right pointer towards the center.
 *
 * Space Complexity: O(1)
 * The function uses a constant amount of extra space. It only uses a few variables to store the indices and the sum of the pointers,
 * regardless of the size of the input array.
 */
function twoSum(numbers: number[], target: number): number[] {
	let l = 0;
	let r = numbers.length - 1;

	while (l < r) {
		const sumOfPointers = numbers[l] + numbers[r];

		//return indexes +1 if pointer sum equal to target
		if (sumOfPointers === target) {
			return [l + 1, r + 1];
		}
		//decrease right pointer if sum > target
		if (sumOfPointers > target) {
			r--;
		}
		//increase left pointer if sum < target
		else {
			l++;
		}
	}
	return [0, 0];
}