/**
 * Finds the length of the longest substring that can be obtained by replacing
 * at most 'k' characters in the given string 's' such that all characters in the
 * resulting substring are the same.
 *
 * @param {string} s - The input string consisting of uppercase English letters.
 * @param {number} k - The maximum number of characters that can be replaced.
 * @returns {number} - The length of the longest possible substring.
 *
 * @description
 * This function uses a sliding window approach to find the longest substring where
 * at most 'k' characters can be replaced to make all characters in the substring the same.
 *
 * @example
 * // returns 4
 * characterReplacement("AABABBA", 1);
 *
 * @example
 * // returns 5
 * characterReplacement("ABAB", 2);
 *
 * @complexity
 * Time complexity: O(n)
 * The function iterates over the string 's' once with the right pointer, and each
 * character is processed at most twice (once by the right pointer and once by the
 * left pointer). Hence, the time complexity is O(n).
 *
 * Space complexity: O(1)
 * The space complexity is O(1) since the `countFreq` map will have at most 26 entries
 * (one for each uppercase English letter), which is considered constant space.
 */
function characterReplacement(s: string, k: number): number {
	const countFreq = new Map<string, number>();
	let leftPointer = 0;
	let maxFreq = 0;
	let longest = 0;

	for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
		countFreq.set(s[rightPointer], (countFreq.get(s[rightPointer]) || 0) + 1);
		maxFreq = Math.max(maxFreq, countFreq.get(s[rightPointer]) || 0);

		while (rightPointer - leftPointer + 1 - maxFreq > k) {
			countFreq.set(s[leftPointer], countFreq.get(s[leftPointer])! - 1);
			leftPointer++;
		}
		longest = Math.max(longest, rightPointer - leftPointer + 1);
	}

	return longest;
}
