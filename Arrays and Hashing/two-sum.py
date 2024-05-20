from typing import List


class Solution:
    # Time complexity: O(n²)
    # Space complexity: O(1)
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        length = len(nums)
        for i in range(length):
            for j in range(i+1, length):
                if(nums[i] + nums[j] == target):
                    return [i, j]
    # Time complexity: O(n)
    # Space complexity: O(n)
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        visited_nums = {}
        for i, val in enumerate(nums):
            # nums[i] + x = target
            # x = target - nums[i]
            x = target - nums[i]
            if x in visited_nums:
                return [i, visited_nums[x]]
            visited_nums[nums[i]] = i