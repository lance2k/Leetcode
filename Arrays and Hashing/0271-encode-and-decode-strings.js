class Solution {
	/**
	 * Encodes a list of strings to a single string.
	 * @param {string[]} strs
	 * @returns {string}
	 */
	encode(strs) {
		let encodedStr = "";
		for (const str of strs) {
			encodedStr += str.length + "#" + str;
		}
		return encodedStr;
	}
	/**
	 * Decodes a single string to a list of strings.
	 * @param {string} str
	 * @returns {string[]}
	 */
	decode(str) {
		const decodedStr = [];
		let i = 0;

		while (i < str.length) {
			let j = i;
			// Find the position of the delimiter '#'
			while (str[j] !== "#") {
				j++;
			}
			// Extract the length of the next string
			const length = parseInt(str.slice(i, j), 10);
			// Extract the string using the obtained length
			decodedStr.push(str.slice(j + 1, j + 1 + length));
			// Move to the next segment
			i = j + 1 + length;
		}
		return decodedStr;
	}
}
