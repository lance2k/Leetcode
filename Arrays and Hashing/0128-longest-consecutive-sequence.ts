/**
 * Finds the length of the longest consecutive sequence in an array of numbers.
 * @param nums - An array of integers.
 * @returns The length of the longest consecutive sequence.
 * @description This function finds the length of the longest consecutive sequence in an array of integers.
 * It uses a Set to track unique numbers and efficiently check for consecutive sequences.
 * 
 * Time Complexity: O(n)
 * - The function iterates over the array once to populate the Set, which takes O(n) time.
 * - The subsequent iteration over the Set elements also takes O(n) time in the worst case.
 * - The inner while loop runs only if a sequence start is found, and in total, all elements are processed at most twice (once in the outer loop, once in the while loop), leading to O(n) overall.
 * 
 * Space Complexity: O(n)
 * - The Set used to store unique elements requires O(n) space, where n is the number of elements in the input array.
 * - No other data structures of significant size are used, leading to an overall space complexity of O(n).
 */
function longestConsecutive(nums: number[]): number {
  const numSet = new Set<number>(nums); //remove duplicates
  let longest = 0;
  for(const num of numSet){
      //find start of sequence
      if(!numSet.has(num-1)){
          let length = 1;
          //increase length until sequence stops
          while(numSet.has(num+length)){
              length++
          }
          //update longest to the longest sequence
          longest = Math.max(length, longest)
      }
  }
  return longest;
};