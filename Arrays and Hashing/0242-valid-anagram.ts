/**
 * Checks if two strings are anagrams by sorting the characters and comparing the results.
 * @param s - The first string.
 * @param t - The second string.
 * @returns A boolean indicating whether the two strings are anagrams.
 *
 * @remarks
 * Time Complexity: O(n log n), where n is the length of the strings. This is due to the sorting step.
 * Space Complexity: O(n), where n is the length of the strings. This is for the storage of the sorted strings.
 */
function isAnagram(s: string, t: string): boolean {
  // If the lengths of the strings are different, they cannot be anagrams.
  if (s.length !== t.length) {
      return false;
  }
  // Split the strings into arrays of characters, sort them, join them back into strings, and compare.
  return s.split("").sort().join("") === t.split("").sort().join("");
}

/**
* Checks if two strings are anagrams by counting character occurrences and comparing the counts.
* @param s - The first string.
* @param t - The second string.
* @returns A boolean indicating whether the two strings are anagrams.
*
* @remarks
* Time Complexity: O(n), where n is the length of the strings. This is because we iterate through the strings and the map operations are O(1).
* Space Complexity: O(1), since the space for the character count arrays is fixed at 26 (for the 26 letters of the alphabet).
*/
function isAnagram2(s: string, t: string): boolean {
  // If the lengths of the strings are different, they cannot be anagrams.
  if (s.length !== t.length) {
      return false;
  }

  // Create maps to count occurrences of each character in both strings.
  const countS = new Map<string, number>();
  const countT = new Map<string, number>();

  // Iterate over the strings and populate the maps with character counts.
  for (let index = 0; index < s.length; index++) {
      countS.set(s[index], (countS.get(s[index]) ?? 0) + 1);
      countT.set(t[index], (countT.get(t[index]) ?? 0) + 1);
  }

  // Compare the character counts in both maps.
  for (const key of countS.keys()) {
      if (countS.get(key) !== countT.get(key)) {
          return false;
      }
  }

  return true;
}