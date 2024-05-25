/**
 * Groups anagrams together from the input list of strings.
 *
 * @param {string[]} strs - The input array of strings.
 * @returns {string[][]} - A list of groups of anagrams.
 *
 * Time Complexity: O(N * L * log(L))
 *   - Splitting the word into characters: O(L)
 *   - Sorting the characters: O(L * log(L))
 *   - Joining the characters back to a string: O(L)
 *   - Checking and setting in the map: O(1)
 *   - Total for each word: O(L * log(L))
 *   - Given N words in `strs`, total time complexity: O(N * L * log(L))
 *
 * Space Complexity: O(N * L)
 *   - Storing the map: O(N * L) (in the worst case, all words are unique and not anagrams)
 *   - Intermediate storage (split, sort, join): O(L)
 *   - Total space complexity: O(N * L)
 */
function groupAnagrams(strs: string[]): string[][] {
	let hashMap = new Map<string, string[]>();

	for (const strWord of strs) {
		const sortedWord = strWord.split("").sort().join("");
		if (!hashMap.has(sortedWord)) {
			hashMap.set(sortedWord, []);
		}
		hashMap.get(sortedWord)!.push(strWord);
	}

	return [...hashMap.values()];
}

/**
 * Groups anagrams together from the input list of strings using character frequency counting.
 *
 * @param {string[]} strs - The input array of strings.
 * @returns {string[][]} - A list of groups of anagrams.
 *
 * Time Complexity: O(N * L)
 *   - Filling frequency count: O(L)
 *   - Creating the key string from frequency count: O(26) = O(1)
 *   - Checking and setting in the map: O(1)
 *   - Total for each word: O(L)
 *   - Given N words in `strs`, total time complexity: O(N * L)
 *
 * Space Complexity: O(N * L)
 *   - Storing the map: O(N * L) (in the worst case, all words are unique and not anagrams)
 *   - Intermediate storage (frequency count array): O(26) = O(1)
 *   - Total space complexity: O(N * L)
 */
function groupAnagrams2(strs: string[]): string[][] {
	let hashMap = new Map<string, string[]>();

	for (const strWord of strs) {
		let freqCount = Array(26).fill(0);
		for (const char of strWord) {
			freqCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
		}
		const keyCount = freqCount.join(",");
		if (!hashMap.has(keyCount)) {
			hashMap.set(keyCount, []);
		}
		hashMap.get(keyCount)!.push(strWord);
	}

	return [...hashMap.values()];
}
