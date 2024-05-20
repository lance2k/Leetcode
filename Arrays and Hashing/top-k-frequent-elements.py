from collections import Counter
import heapq
from typing import List

class Solution:

    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        if k == len(nums):
            return nums
        count = Counter(nums)
        return heapq.nlargest(k, count.keys(), key=count.get)
    
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        if k == len(nums):
            return nums
        count = Counter(nums)
        top_keys = [x[0] for x in count.most_common(k)]
        return top_keys
    
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # If k is equal to the length of nums, return all elements
        if k == len(nums):
            return nums
        
        # Count the frequency of each element in nums
        counts = Counter(nums)
        
        # Sort the elements by frequency in descending order
        sorted_items = sorted(counts.items(), key=lambda x: x[1], reverse=True)

        # Get the top k elements by frequency
        top_keys = [x[0] for x in sorted_items[:k]]
        
        # Return the top k elements
        return top_keys
    
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # If k is equal to the length of nums, return all elements
        if k == len(nums):
            return nums

        # Count the frequency of each number in the list
        counts = {}
        for num in nums:
            counts[num] = counts.get(num, 0) + 1

        # Group the numbers by frequency
        freq = [[] for _ in range(len(nums) + 1)]
        for num, count in counts.items():
            freq[count].append(num)

        # Build the result list
        results = []
        for i in range(len(freq) - 1, 0, -1):
            results.extend(freq[i])
            if len(results) >= k:
                return results
        

