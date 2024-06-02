/**
 * Calculates the total amount of water trapped between the heights.
 *
 * @param {number[]} height - An array representing the height of bars.
 * @return {number} - The total amount of trapped water.
 *
 * Time Complexity:
 * The algorithm iterates through the height array once, performing constant-time operations
 * for each element. Therefore, the time complexity is O(n), where n is the length of the height array.
 *
 * Space Complexity:
 * The algorithm uses a constant amount of extra space, independent of the input size.
 * Therefore, the space complexity is O(1).
 */
function trap(height: number[]): number {
  // Check if the height array is empty, return 0 if true
  if (!height.length) {
      return 0;
  }

  let totalWater = 0; // Initialize the total amount of trapped water
  let l = 0; // Initialize the left pointer
  let r = height.length - 1; // Initialize the right pointer
  let leftMaxHeight = height[l]; // Initialize the left maximum height
  let rightMaxHeight = height[r]; // Initialize the right maximum height

  // Iterate until the left pointer meets the right pointer
  while (l < r) {
      // Compare left maximum height and right maximum height
      if (leftMaxHeight < rightMaxHeight) {
          l++; // Move the left pointer to the right
          leftMaxHeight = Math.max(leftMaxHeight, height[l]); // Update left maximum height
          totalWater += leftMaxHeight - height[l]; // Calculate trapped water at the current left position
      } else {
          r--; // Move the right pointer to the left
          rightMaxHeight = Math.max(rightMaxHeight, height[r]); // Update right maximum height
          totalWater += rightMaxHeight - height[r]; // Calculate trapped water at the current right position
      }
  }
  return totalWater; // Return the total amount of trapped water
}
