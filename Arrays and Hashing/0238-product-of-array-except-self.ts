/**
 * Calculates the product of all elements in the input array except for the current element.
 * @param nums An array of integers.
 * @returns An array where each element at index 'i' contains the product of all elements in 'nums' except 'nums[i]'.
 * @description This function calculates the product of all elements in the input array except for the current element at index 'i'.
 * It utilizes two different approaches:
 * Approach 1 (productExceptSelf): Uses two auxiliary arrays ('prefixProducts' and 'postfixProducts') to store the product of all elements to the left and right of each element respectively.
 * Then, it combines these two arrays to compute the final result.
 * The time complexity of this approach is O(n), where 'n' is the length of the input array 'nums', as it iterates over 'nums' once.
 * The space complexity for this approach is O(n) as well, as it requires additional space for two arrays ('prefixProducts' and 'postfixProducts'), each of length 'n'.
 */
function productExceptSelf(nums: number[]): number[] {
	const prefixProducts = new Array<number>(nums.length).fill(1);
	const postfixProducts = new Array<number>(nums.length).fill(1);
	const answer = new Array<number>(nums.length).fill(1);

	for (let index = 1; index < nums.length; index++) {
		prefixProducts[index] = prefixProducts[index - 1] * nums[index - 1];
		postfixProducts[nums.length - index - 1] =
			postfixProducts[nums.length - index] * nums[nums.length - index];
	}
	for (let index = 0; index < nums.length; index++) {
		answer[index] = prefixProducts[index] * postfixProducts[index];
	}
	return answer;
}

/**
 * Calculates the product of all elements in the input array except for the current element.
 * @param nums An array of integers.
 * @returns An array where each element at index 'i' contains the product of all elements in 'nums' except 'nums[i]'.
 * @description This function calculates the product of all elements in the input array except for the current element at index 'i'.
 * It uses two variables ('prefix' and 'postfix') to keep track of the product of elements to the left and right of the current element as it iterates through the array.
 * The time complexity of this approach is O(n), where 'n' is the length of the input array 'nums', as it iterates over 'nums' once.
 * The space complexity for this approach is O(1), as it only requires space for a few variables ('prefix', 'postfix', and 'answer') regardless of the size of 'nums'.
 */
function productExceptSelf2(nums: number[]): number[] {
	const answer = new Array<number>(nums.length).fill(1);
	let prefix = 1;
	let postfix = 1;

	for (let index = 0; index < nums.length; index++) {
		answer[index] *= prefix;
		prefix *= nums[index];
		answer[nums.length - index - 1] *= postfix;
		postfix *= nums[nums.length - index - 1];
	}
	return answer;
}
