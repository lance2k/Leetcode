/**
 * Checks if there are any duplicate elements in the array by sorting it first.
 * @param nums - The array of numbers to check for duplicates.
 * @returns True if any value appears at least twice, otherwise false.
 *
 * Time Complexity: O(n log n)
 * - Sorting the array takes O(n log n) time.
 * - Iterating through the sorted array takes O(n) time.
 * - Overall, the time complexity is dominated by the sorting step.
 *
 * Space Complexity: O(1) auxiliary space
 * - Sorting is usually performed in-place with O(1) additional space.
 * - However, the input array may require O(n) space for the sort, depending on the implementation.
 */
function containsDuplicate(nums: number[]): boolean {
	const numsSort = nums.sort(); // Sorting takes O(n log n) time

	for (const index of numsSort.keys()) {
		// Iterating takes O(n) time
		if (numsSort[index] === numsSort[index + 1]) {
			// Comparison takes O(1) time
			return true;
		}
	}
	return false; // If no duplicates are found, return false
}
/**
 * Checks if there are any duplicate elements in the array using a Set.
 * @param nums - The array of numbers to check for duplicates.
 * @returns True if any value appears at least twice, otherwise false.
 *
 * Time Complexity: O(n)
 * - Iterating through the array takes O(n) time.
 * - Checking and adding elements in the Set both take O(1) time on average.
 * - Overall, the time complexity is O(n).
 *
 * Space Complexity: O(n)
 * - The Set requires O(n) space to store the unique elements of the array.
 */
function containsDuplicate2(nums: number[]): boolean {
	const numSet = new Set<number>(); // Creating a Set to store unique numbers

	for (const num of nums) {
		// Iterating through the array takes O(n) time
		if (numSet.has(num)) {
			// Checking for existence in the Set takes O(1) time on average
			return true;
		}
		numSet.add(num); // Adding to the Set takes O(1) time on average
	}
	return false; // If no duplicates are found, return false
}
