/**
 * Time complexity: O(n)
 * Space complexity: O(n)
 * @param nums number[]
 * @returns majorityElement number
 */
function majorityElement(nums: number[]): number {
	const target = Math.floor(nums.length / 2);
	const counter = new Map<number, number>();

	for (const num of nums) {
		counter.set(num, (counter.get(num) || 0) + 1);
	}

	for (const [key, value] of counter) {
		if (value > target) {
			return key;
		}
	}
	// This return is here as a fallback, but according to the problem statement,
	// there will always be a majority element, so this should never be reached.
	return 0;
}
/**
 * Boyer–Moore majority vote algorithm
We will sweep down the sequence starting at the first element.

As we sweep we maintain a pair consisting of a current candidate and a counter. Initially, the current candidate is unknown and the counter is 0.

When we move the pointer forward over an element e:

If the counter is 0, we set the current candidate to e and we set the counter to 1.
If the counter is not 0, we increment or decrement the counter according to whether e is the current candidate.

When we are done, the current candidate is the majority element, if there is a majority.

 * Time complexity: O(n)
 * Space complexity: O(1)
 * @param nums number[]
 * @returns majorityElement number
 */
function majorityElement2(nums: number[]): number {
  let candidate;
  let counter = 0;

  for(const num of nums) {
      if(counter == 0){
          candidate = num;
      }
      counter += (num == candidate) ? 1 : -1;
  }
  return candidate;
}
