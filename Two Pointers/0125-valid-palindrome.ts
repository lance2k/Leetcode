/**
 * Determines if a given string is a palindrome, considering only alphanumeric characters and ignoring case.
 * @param s The input string to be checked.
 * @returns A boolean indicating whether the string is a palindrome.
 *
 * @description This function creates a new string consisting only of the alphanumeric characters
 * in the input string `s`, and then checks if this new string is a palindrome by reversing it and
 * comparing it to the original.
 *
 * Time Complexity: O(n)
 * - The function iterates over the input string once to filter alphanumeric characters (O(n)).
 * - The `split` (O(n)), `reverse` (O(n)), and `join` (O(n)) operations combined result in O(n) time complexity.
 *
 * Space Complexity: O(n)
 * - The function creates a new string `alphaNumString` which in the worst case can be of length `n` (all characters in the input are alphanumeric).
 * - The `split`, `reverse`, and `join` operations also create intermediate arrays/strings of length `n`.
 */
function isPalindrome(s: string): boolean {
	let alphaNumString = "";
	for (const char of s) {
		// store only alphanumeric characters
		if (isAlphaNumeric(char)) {
			alphaNumString += char.toLowerCase();
		}
	}
	return alphaNumString === alphaNumString.split("").reverse().join("");
}

/**
 * Determines if a given string is a palindrome, considering only alphanumeric characters and ignoring case.
 * @param s The input string to be checked.
 * @returns A boolean indicating whether the string is a palindrome.
 *
 * @description This function uses two pointers to check for palindrome properties without creating a new string.
 * It moves the pointers towards the center, skipping non-alphanumeric characters, and compares corresponding
 * characters from the start and end of the string.
 *
 * Time Complexity: O(n)
 * - The function processes each character of the input string at most twice (once by the left pointer and once by the right pointer), resulting in linear time complexity.
 *
 * Space Complexity: O(1)
 * - The function uses a constant amount of extra space for the pointers and a few other variables, regardless of the input size.
 */
function isPalindrome2(s: string): boolean {
	let l = 0;
	let r = s.length - 1;
	while (l < r) {
		// move left and right pointers until an alphanumeric character is found
		// but do not go out of bounds
		while (!isAlphaNumeric(s[l]) && l < r) {
			l++;
		}
		while (!isAlphaNumeric(s[r]) && l < r) {
			r--;
		}
		// check lowercase alphanumeric character at left and right pointer if not equal
		if (s[l].toLowerCase() !== s[r].toLowerCase()) {
			return false;
		}
		// update left and right pointers
		l++;
		r--;
	}
	return true;
}

/**
 * Checks if a character is alphanumeric.
 * @param char The character to be checked.
 * @returns A boolean indicating whether the character is alphanumeric.
 */
function isAlphaNumeric(char: string): boolean {
	return (
		("a".charCodeAt(0) <= char.charCodeAt(0) &&
			char.charCodeAt(0) <= "z".charCodeAt(0)) ||
		("A".charCodeAt(0) <= char.charCodeAt(0) &&
			char.charCodeAt(0) <= "Z".charCodeAt(0)) ||
		("0".charCodeAt(0) <= char.charCodeAt(0) &&
			char.charCodeAt(0) <= "9".charCodeAt(0))
	);
}
