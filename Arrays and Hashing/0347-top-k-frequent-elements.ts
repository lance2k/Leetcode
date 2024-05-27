/**
 * Returns the top k frequent elements in the given array.
 * @param nums The input array of numbers.
 * @param k The number of top frequent elements to return.
 * @returns An array containing the top k frequent elements.
 * @description
 * Time Complexity: O(n log n) for sorting the entries, where n is the number of elements in the input array.
 *                  O(n) for iterating over the frequency count map.
 *                  O(n) for slicing the array to get the top k elements.
 *                  Overall time complexity is O(n log n).
 * Space Complexity: O(n) for storing the frequency count map and the buckets array.
 *                   O(n) for storing the top k frequent elements.
 *                   Overall space complexity is O(n).
 */
function topKFrequent(nums: number[], k: number): number[] {
  const freqCount = new Map<number, number>();

  for (const num of nums) {
      freqCount.set(num, (freqCount.get(num) ?? 0) + 1);
  }

  const topKFrequentElements = Array.from(freqCount.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, k)
      .map((v) => v[0]);

  return topKFrequentElements;
}
/**
* Returns the top k frequent elements in the given array.
* @param nums The input array of numbers.
* @param k The number of top frequent elements to return.
* @returns An array containing the top k frequent elements.
* @description
* Time Complexity: O(n) for creating the buckets array.
*                  O(n) for iterating over the input array to populate the frequency count map.
*                  O(n) for iterating over the frequency count map.
*                  O(n) for flattening the buckets array.
*                  O(n) for slicing the flattened array to get the top k elements.
*                  Overall time complexity is O(n).
* Space Complexity: O(n) for storing the frequency count map.
*                   O(n) for storing the buckets array.
*                   O(n) for storing the flattened array.
*                   O(n) for storing the top k frequent elements.
*                   Overall space complexity is O(n).
*/
function topKFrequent2(nums: number[], k: number): number[] {
  const freqCount = new Map<number, number>();
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  for (const num of nums) {
      freqCount.set(num, (freqCount.get(num) ?? 0) + 1);
  }

  for (const [num, count] of freqCount) {
      buckets[count].push(num);
  }

  const flatBucket = buckets.flat();

  return flatBucket.slice(flatBucket.length - k);
}