from typing import List
class Solution:
    # Time complexity: O(n)
    # Space complexity: O(n)
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        if all(num == 0 for num in nums):
            return nums
        
        length = len(nums)
        left_prod = [1] * length
        right_prod = [1] * length

        for i in range(1, length):
            left_prod[i] = left_prod[i-1] * nums[i-1]
            right_prod[length-i-1] = right_prod[length-i] * nums[length-i]
        
        result = [left_prod[i] * right_prod[i] for i in range(length)]
        return result
    # Time complexity: O(n)
    # Space complexity: O(1)
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        if all(num == 0 for num in nums):
            return nums
        
        length = len(nums)
        result = [1] * length
        for i in range(1, length):
            result[i] = result[i-1] * nums[i-1]

        right_prod = 1
        for i in range(length-1, -1, -1):
            result[i] *= right_prod
            right_prod *= nums[i]
        
        return result