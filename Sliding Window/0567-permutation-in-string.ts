/**
 * Checks if a permutation of string s1 is a substring of string s2.
 *
 * Time Complexity: O(N)
 * - The time complexity is O(N), where N is the length of s2.
 * - This is because the main loop iterates through s2 only once.
 * - Each operation inside the loop (updating the frequency map, checking for permutation) is O(1) on average.
 * 
 * Space Complexity: O(1)
 * - The space complexity is O(1) because the space used by the frequency maps (countFreq and subFreq) 
 *   is limited by the size of the character set. In this case, the character set is constant (e.g., lowercase English letters), 
 *   so the space required does not grow with the size of the input.
 * 
 * @param s1 - The string to check permutations of.
 * @param s2 - The string to check against.
 * @returns boolean - True if a permutation of s1 is a substring of s2, false otherwise.
 */
function checkInclusion(s1: string, s2: string): boolean {
	if (s1.length > s2.length) {
		return false;
	}

	const countFreq = new Map<string, number>();
	const subFreq = new Map<string, number>();

	// Initialize frequency maps for s1 and the first window of s2
	for (let index = 0; index < s1.length; index++) {
		countFreq.set(s1[index], (countFreq.get(s1[index]) || 0) + 1);
		subFreq.set(s2[index], (subFreq.get(s2[index]) || 0) + 1);
	}

	let left = 0;

	// Slide the window across s2
	for (let right = s1.length; right < s2.length; right++) {
		if (isPermutation(countFreq, subFreq)) {
			return true;
		}

		// Update subFreq for the sliding window
		subFreq.set(s2[left], subFreq.get(s2[left])! - 1);
		if (subFreq.get(s2[left]) === 0) {
			subFreq.delete(s2[left]);
		}

		left++;

		subFreq.set(s2[right], (subFreq.get(s2[right]) || 0) + 1);
	}

	// Final check for the last window
	return isPermutation(countFreq, subFreq);
}

function isPermutation(
	countFreq: Map<string, number>,
	subFreq: Map<string, number>
): boolean {
	return Array.from(countFreq.keys()).every((key) => {
		return countFreq.get(key) === subFreq.get(key);
	});
}
/**
 * Time Complexity: O(N)
 * - The function makes two passes through `s1` and `s2`, which have lengths of `M` and `N`, respectively.
 * - The first loop runs in O(M) time to initialize the frequency array for `s1`.
 * - The second loop runs in O(N) time to slide the window across `s2`.
 * - The `isPermutation` function, which checks the array, runs in O(26) time, which is a constant O(1) operation since the array has a fixed size of 26.
 * - Overall, the time complexity is O(N) because the most significant operation is iterating over `s2`.

 * Space Complexity: O(1)
 * - The `charFreq` array always has a fixed size of 26 elements, regardless of the input size.
 * - No additional space is used that scales with the input size, so the space complexity is O(1).
 */
function checkInclusion2(s1: string, s2: string): boolean {
	// If the length of s1 is greater than s2, s1 cannot be a permutation of any substring in s2.
	if (s1.length > s2.length) {
		return false;
	}

	// Create an array of size 26 (for each letter in the alphabet) to keep track of character frequencies.
	// Initialize all elements to 0.
	const charFreq = new Array(26).fill(0);

	// Helper function to check if all elements in charFreq are 0, indicating a permutation.
	const isPermutation = () => charFreq.every((char) => char === 0);

	// Populate the charFreq array based on the frequency of characters in s1.
	// This loop calculates the frequency of each character in s1.
	for (let index = 0; index < s1.length; index++) {
		// Convert the character to its corresponding index in the alphabet (0-25).
		charFreq[s1[index].charCodeAt(0) - 97]++;
	}

	// Iterate through s2, adjusting the window of characters being checked for a permutation.
	for (let index = 0; index < s2.length; index++) {
		// Decrease the frequency of the current character in s2, as it enters the sliding window.
		charFreq[s2[index].charCodeAt(0) - 97]--;
		
		// If the sliding window exceeds the length of s1, move the left pointer by increasing the frequency
		// of the character that is leaving the window.
		if (index >= s1.length) {
			charFreq[s2[index - s1.length].charCodeAt(0) - 97]++;
		}

		// If the current window is a permutation of s1, return true.
		if (isPermutation()) {
			return true;
		}
	}

	// If no permutation was found, return false.
	return false;
}

