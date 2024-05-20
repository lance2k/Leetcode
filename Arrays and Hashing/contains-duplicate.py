from typing import List


class Solution:
    # Time complexity: O(n²)
    # Space complexity: O(1)
    def containsDuplicate(self, nums: List[int]) -> bool:
        length = len(nums)
        for i in range(length):
            for j in range(i+1, length):
                if (nums[i] == nums[j]):
                    return True

        return False

    # Time complexity: O(n)
    # Space complexity: O(n)
    def containsDuplicate(self, nums: List[int]) -> bool:
        unique_list = set()
        for num in nums:
            if num in unique_list:
                return True
            unique_list.add(num)
        return False
