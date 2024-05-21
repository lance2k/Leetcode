class Solution:
    # Time complexity: O(n)
    # Space complexity: O(n)    
    def isPalindrome(self, s: str) -> bool:
        new = ''
        for a in s:
            if a.isalpha() or a.isdigit():
                new += a.lower()
        return (new == new[::-1])
    
    # Time complexity: O(n)
    # Space complexity: O(1)    
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        
        while left < right:
            # Skip non-alphanumeric characters from the left
            while left < right and not self.isAlphaNum(s[left]):
                left += 1
            # Skip non-alphanumeric characters from the right
            while left < right and not self.isAlphaNum(s[right]):
                right -= 1
            # Compare characters
            if s[left].lower() != s[right].lower():
                return False
            # Move towards the middle
            left += 1
            right -= 1
        
        return True

    def isAlphaNum(self, c: str) -> bool:
        return (ord("A") <= ord(c) <= ord("Z") or
                ord("a") <= ord(c) <= ord("z") or
                ord("0") <= ord(c) <= ord("9"))