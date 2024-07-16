/**
 * Finds the length of the longest substring without repeating characters.
 *
 * @param {string} s - The input string.
 * @returns {number} - The length of the longest substring without repeating characters.
 *
 * @example
 * ```typescript
 * lengthOfLongestSubstring("abcabcbb"); // Returns 3, because "abc" is the longest substring without repeating characters.
 * lengthOfLongestSubstring("bbbbb");    // Returns 1, because "b" is the longest substring without repeating characters.
 * lengthOfLongestSubstring("pwwkew");   // Returns 3, because "wke" is the longest substring without repeating characters.
 * ```
 *
 * @remarks
 * - Time complexity: O(n), where `n` is the length of the input string `s`.
 *   - Each character is processed at most twice (once by the `right` pointer and once by the `left` pointer).
 * - Space complexity: O(min(n, m)), where `n` is the length of the input string `s` and `m` is the size of the character set.
 *   - In the worst case, the set will store all unique characters from `s`, but this is bounded by the size of the character set.
 */
function lengthOfLongestSubstring(s: string): number {
  const numSet = new Set<string>();
  let longest = 0;
  let left = 0;

  for (let right = 0; right < s.length; right++) {
      // Move left pointer while there are repeating characters
      while (numSet.has(s[right])) {
          numSet.delete(s[left]);
          left++;
      }
      numSet.add(s[right]);
      // Update longest substring length
      longest = Math.max(longest, right - left + 1);
  }
  return longest;
}
