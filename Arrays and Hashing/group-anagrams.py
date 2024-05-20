from typing import List


class Solution:
    # O(n * k log k)
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list) # mapping charCount to list of Anagrams

        for s in strs:
            ans[tuple(sorted(s))].append(s)
        
        return ans.values()
    # O(n * k)
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        ans = defaultdict(list) # mapping charCount to list of Anagrams

        for s in strs:
            count = [0] * 26 # a ... z

            for c in s:
                count[ord(c) - ord("a")] += 1

            ans[tuple(count)].append(s)
        
        return ans.values()